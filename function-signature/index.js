// Function signature= Function signature defines how will be the function structure 
var userInfo1;
var userInfo2;
var userInfo3;
userInfo1 = function () {
    console.log("Hi I am user info 1");
};
userInfo1();
userInfo2 = function (name) {
    console.log("This is ".concat(name));
};
userInfo2("Maidul");
userInfo3 = function (name, age) {
    return (("Name: ".concat(name, " and age: ").concat(age)));
};
console.log(userInfo3("Maidul Islam", 25));
