// here declare an array which holds on objects of students
var Students = [];
var student1 = {
    id: 1,
    name: "Mr kawwa",
    year: 2023,
    isGraduate: true
};
var student2 = {
    id: 2,
    name: "Mr Kader",
    year: 2025,
    isGraduate: false
};
Students.push(student1);
Students.push(student2);
var printStudentInfo = function (student) {
    console.log("Student ID: ".concat(student.id, ", Name: ").concat(student.name, ", Year: ").concat(student.year, ", IsGraduate: ").concat(student.isGraduate));
};
Students.forEach(function (student) { return printStudentInfo(student); });
