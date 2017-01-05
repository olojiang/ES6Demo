"use strict";

//In ES6, one chinese character will be counted as length 2
console.info("'𠮷'.length:", "𠮷".length);

// Original unicode expression, and new characters
console.info("'\u{20BB7}' == '𠮷':", '\u{20BB7}' == '𠮷');

// has 2 code for each slash
console.info("'𠮷'.codePointAt(0):", '𠮷'.codePointAt(0));
console.info("'𠮷'.codePointAt(1):", '𠮷'.codePointAt(1));

// There is only on character, even lenght === 2
for (var c of '𠮷') {
    console.info("c:", c);
}

// Regular expression has / /u, to present unicode character match
console.info("'𠮷'.match(/./u):", '𠮷'.match(/./u));