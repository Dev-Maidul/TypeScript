// Function signature= Function signature defines how will be the function structure 
let userInfo1:()=> void;
let userInfo2:(name:string)=>void;
let userInfo3:(name:string,age:number)=>string;
userInfo1=()=>{
    console.log("Hi I am user info 1");
}
userInfo1();
userInfo2=(name)=>{
    console.log(`This is ${name}`);
}
userInfo2("Maidul");

userInfo3=(name:string,age:number)=>{
    return ((`Name: ${name} and age: ${age}`));

}
console.log(userInfo3("Maidul Islam",25));