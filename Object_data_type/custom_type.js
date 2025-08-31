var users;
users = [];
var user1;
user1 = { userName: "Maidul", userId: 101 };
users.push(user1);
var user2;
user2 = { userName: "Jahid", userId: 333 };
users.push(user2);
var getRequest;
function requestHandler(requestType) {
    console.log(requestType);
}
requestHandler("GET");
