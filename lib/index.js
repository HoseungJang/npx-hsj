"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.run = void 0;
var react_1 = require("react");
var ink_1 = require("ink");
var hoseung_1 = require("./hoseung");
exports.run = function () { return ink_1.render(react_1.createElement(hoseung_1.Hoseung)); };
