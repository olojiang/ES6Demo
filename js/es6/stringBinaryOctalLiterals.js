"use strict";

/*
 * Some new method from ES6 for String
 */

// codePointAt()
// - return non-nagative number present UTF-16 encoded code point
console.info("'恽佳丽'.codePointAt(2):", '恽佳丽'.codePointAt(2));

// includes()
// - originally we did this by indexOf()
console.info("'hello with other staffs'.includes('other'):", 'hello with other staffs'.includes('other'));

// startsWith()
// - not new in Java
console.info("'Hello with the ES6'.startsWith('Hello'):", 'Hello with the ES6'.startsWith('Hello'));

// endsWith()
// - not new in IBM Java
console.info("'Hello with the ES6'.endsWith('ES6'):", 'Hello with the ES6'.endsWith('ES6'));

// repeat()
// - ruby has this from beginning
console.info("'Enjoy coding, '.repeat(3):", 'Enjoy coding, '.repeat(3));

// normalize()
// - UnicodeNormalization Form of a given string
// ? don't know when I should use it
console.info("'\u1E9B\u0323'.normalize('NFC'):", '\u1E9B\u0323'.normalize('NFC'));

/*
 * Binary
 */
console.info("0b1111011 === 503:", 0b1111011 === 503); // 503

/*
 * Octal
 */
console.info("0o767 === 503:", 0o767 === 503); // true