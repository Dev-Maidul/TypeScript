// class object and constructor in typescript
var user = /** @class */ (function () {
    function user(userName, age, gender, isMarried) {
        this.userName = userName;
        this.age = age;
        this.gender = gender;
        this.isMarried = isMarried;
    }
    user.prototype.display = function () {
        console.log("User Name: ".concat(this.userName, ", Age: ").concat(this.age, ", Gender: ").concat(this.gender, ", Married: ").concat(this.isMarried));
    };
    return user;
}());
var user1 = new user("Maidul", 26, "Male", false);
user1.display();
var user2 = new user("Jahid", 22, "Male", false);
user2.display();
