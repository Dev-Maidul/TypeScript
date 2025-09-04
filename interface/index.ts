// learning interface
interface IUser{
    id:number;
    name:string;
    age:number
}
let users:IUser[]=[];

let user1:IUser={
    id:1,
    name:"Mr Potato",
    age:22
}
let user2:IUser={
    id:2,
    name:"Mr Kodu",
    age:21
}

const printInfo=(user:IUser)=>{
    console.log(`Id: ${user.id}, UserName: ${user.name}, Age: ${user.age}`)
}

users.push(user1);
users.push(user2);

users.forEach(user=> printInfo(user));
