// class object and constructor in typescript
class user{
    userName:string;
    age:Number;
    gender:string;
    isMarried:boolean;

    constructor(userName:string,age:number,gender:string,isMarried:boolean){

        this.userName=userName;
        this.age=age;
        this.gender=gender
        this.isMarried=isMarried
    }
    display() {
        console.log(`User Name: ${this.userName}, Age: ${this.age}, Gender: ${this.gender}, Married: ${this.isMarried}`)
    }
}
let user1=new user("Maidul",26,"Male",false);
user1.display();

let user2=new user("Jahid",22,"Male",false);
user2.display();