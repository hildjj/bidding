{{
import {
  Bid, BidTable, Definition, Doc, Explanation, Head, Link, P, Suits
} from './ast.js';
}}
{
const indents = []
let indent_level = 0;
}

doc
  = meta:meta? graphs:graph+ { return new Doc(meta, graphs) }

meta
  = dashes pairs:nvpair* dashes { return Object.fromEntries(pairs) }

dashes = "---" EOL

nvpair
  = _ @identifier _ ":" _ @$[^\r\n]* EOL

graph
  = heading
  / blank
  / bidtable
  / paragraph

heading = lev:$"#"|1..6| exp:explanation EOL { return new Head(lev.length, exp) }

blank = _ "\n" { return '' }

paragraph
  = lines:line+ { return new P(lines.flat(Infinity)) }

line
  = part:part+ EOL { return [part, ' ']; }

bidtable
  = bids:(@bidline EOL)+ { return new BidTable(bids); }

bidline
  = i:indent d:define { d.indent = i; return d; }

indent
  = ws:_ {
    const len = ws.length
    if (indents.length === 0) {
      indent_level = 0;
      indents.push(len);
    } else {
      indent_level = indents.indexOf(len);
      if (indent_level === -1) {
        if (len < indents[indents.length - 1]) {
          error(`Invalid outdent: ${len}`)
        }
        indents.push(len);
        indent_level = indents.length - 1;
      } else {
        // Pop down to current level
        indents.splice(indent_level + 1, Infinity);
      }
    }
    return indent_level
  }

define
  = b:bids __ e:explanation { return new Definition(b, e) }
  / alt:$[a-z0-9-]i+ alert:"!"? ")" __ e:explanation { return new Definition([new Bid("", alt, alert)], e, alert) }

bids
  = (bid / opponent_bid) |1.., _ "-" _ |

opponent_bid
  = "(" bid:through ")" { bid.opponent = true; return bid; }

through
  = thr:((@bid _)? "->" _)? bid:bid more:(_"+")? {
    bid.start = thr?.[0];
    bid.through = Boolean(thr);
    bid.more = Boolean(more);
    return bid;
  }

bid
  = level:level suits:suits alert:alert? { return new Bid(level, suits, alert) }
  / "XX" alert:alert? { return new Bid(0, 'XX', alert); }
  / bid:[DXRP*] alert:alert? &[ )-] { return new Bid(0, bid, alert); }

level
  = [1-7] { return parseInt(text(), 10) }

suits
  = s:$suit+ { return new Suits(s) }

suit
  = [CDHSNmMrbX*]i

explanation
  = parts:part* { return new Explanation(parts); }

part
  = "!" @suits
  / "!"
  / "->" { return "&rarr;" }
  / "--" { return "-" }
  / "-"
  / "<" { return "&lt;" }
  / link
  / "["
  / $[^\r\n!\[-]+

link
 = "[" text:$[^\]]+ "]" _ "(" href:$[^)]+ ")" { return new Link(text, href); }

alert
  = "!"

__
  = $WS+

_
  = $WS*

WS
  = [ \t]

EOL
  = "\r\n"
  / "\n"
  / !.

identifier
  = $(XID_Start XID_Continue*)

XID_Start
  = c:ValidSourceCharacter &{ return /\p{XID_Start}/u.test(c) }

XID_Continue
  = c:ValidSourceCharacter &{ return /\p{XID_Continue}/u.test(c) }

// JS allows unpaired surrogates in strings, source code, etc.
SourceCharacter
  = ValidSourceCharacter
  / [\uD800-\uDBFF] // Lone first surrogate
  / [\uDC00-\uDFFF] // Lone second surrogate

ValidSourceCharacter
  = _SourceCharacterLow
  / _SurrogatePair

// Not surrogates
_SourceCharacterLow
  = [\u0000-\uD7FF\uE000-\uFFFF]

_SurrogatePair
  = $( [\uD800-\uDBFF][\uDC00-\uDFFF] )
