var Users = /** @class */ (function () {
    function Users(fullName, age) {
        var _this = this;
        this.fullName = fullName;
        this.age = age;
        this.formatUser = function () {
            return "Name: ".concat(_this.fullName, " Age: ").concat(_this.age);
        };
    }
    return Users;
}());
var user1 = new Users("Mr Potato", 11);
console.log(user1);
