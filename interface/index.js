var users = [];
var user1 = {
    id: 1,
    name: "Mr Potato",
    age: 22
};
var user2 = {
    id: 2,
    name: "Mr Kodu",
    age: 21
};
var printInfo = function (user) {
    console.log("Id: ".concat(user.id, ", UserName: ").concat(user.name, ", Age: ").concat(user.age));
};
users.push(user1);
users.push(user2);
users.forEach(function (user) { return printInfo(user); });
