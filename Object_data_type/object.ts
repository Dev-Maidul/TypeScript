// object data type
let users:object[];
users=[];
let user1:{userName:string; userId:number};
user1={userName:"Maidul", userId:101};
users.push(user1);
// console.log(users)
let user2:{userName:string; userId?:number};
user2={userName:"Jahid"}
users.push(user2);
// console.log(users);
for(const key in users){
    console.log(users[key]["userId"]);
}