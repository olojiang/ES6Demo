/*
 * Import a module
 */
// Default Babel will translate import and export to Common.js
// - For more info about the translate: http://babeljs.io/docs/usage/modules/
import * as math from "./moduleMath";
console.info("2Pi_v1:", math.sum(math.pi, math.pi));

// use destruction to get the export staffs
import {sum, pi} from "./moduleMath";
console.info("2Pi_v2:", sum(pi, pi));