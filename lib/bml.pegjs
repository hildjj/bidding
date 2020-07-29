{
const ast = require('./ast')
let last_indent_len = null
let last_level = 0
let last_node = null
}

bidtable
  = (@bidline "\n")*

bidline
  = i:indent d:define { d.indent = i; return d }

indent
  = ws:_ {
    const len = ws.length
    if (last_indent_len == null) {
      last_indent_len = len
    } else if (len < last_indent_len) {
      last_level--
      last_indent_len = len
    } else if (len > last_indent_len) {
      last_level++
      last_indent_len = len
    }
    return last_level
  }

define
  = b:bid __ e:explanation { return new ast.Node(b, e) }

bid
  = level:level suits:suits { return new ast.Node(level, suits) }

level
  = [1-7] { return parseInt(text(), 10) }

suits
  = s:$suit+ { return new ast.Suits(s) }
  / $[XRP]

suit
  = [CDHSNmMrb*]

explanation
  = $[^\n]+
__
  = $WS+
_
  = $WS*

WS
  = [ \t]
