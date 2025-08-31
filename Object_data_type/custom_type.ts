// custom data type
type user={userName:string; userId:number};
let users:user[];
users=[];
let user1:user;
user1={userName:"Maidul", userId:101};
users.push(user1);
let user2:user;
user2={userName:"Jahid",userId:333}
users.push(user2);
// console.log(users)
 type RequestType= "GET" | "POST";
 let getRequest:RequestType;
 function requestHandler(requestType:RequestType){
    console.log(requestType)
 }
 requestHandler("GET")


