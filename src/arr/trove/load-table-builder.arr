provide *
provide-types *
import global as _
include lists
include option

data LoadTableBuilder:
  | builder(
      cols :: List<String>,
      src :: Option,
      sanitizers :: List)
sharing:
  method source(self, s) -> LoadTableBuilder:
    cases (Option) self.src:
      | some(_) => raise("loadTable: .source() called more than once")
      | none    => builder(self.cols, some(s), self.sanitizers)
    end
  end,
  method withSanitizer(self, col :: String, fn) -> LoadTableBuilder block:
    when not(member(self.cols, col)):
      raise("loadTable: column '" + col + "' is not in the column list")
    end
    when any(lam(s): s.col == col end, self.sanitizers):
      raise("loadTable: duplicate withSanitizer call for column '" + col + "'")
    end
    builder(self.cols, self.src, link({col: col, fn: fn}, self.sanitizers))
  end,
  method load(self) block:
    s = cases (Option) self.src:
      | none    => raise("loadTable: .source() must be called before .load()")
      | some(v) => v
    end
    headers-raw  = raw-array-from-list(self.cols)
    san-opts-raw = raw-array-from-list(
      map(lam(e): builtins.as-loader-option("sanitizer", e.col, e.fn) end, self.sanitizers))
    builtins.open-table(s.load(headers-raw, san-opts-raw))
  end
end

fun loadTable(cols :: List<String>) -> LoadTableBuilder:
  builder(cols, none, empty)
end
