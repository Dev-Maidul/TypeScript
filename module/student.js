"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.department = exports.age = exports.studentName = void 0;
exports.displayInfo = displayInfo;
exports.studentName = "Maidul Islam";
exports.age = 25;
exports.department = "Computer Science";
function displayInfo() {
    console.log("Student Name: ".concat(exports.studentName, ", Age: ").concat(exports.age, ", Department: ").concat(exports.department));
}
