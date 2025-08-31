// object data type
var users;
users = [];
var user1;
user1 = { userName: "Maidul", userId: 101 };
users.push(user1);
// console.log(users)
var user2;
user2 = { userName: "Jahid" };
users.push(user2);
// console.log(users);
for (var key in users) {
    console.log(users[key]["userId"]);
}
