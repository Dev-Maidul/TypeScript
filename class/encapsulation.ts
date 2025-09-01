// here are 4 access modifier 1.Public, 2.Private, 3.Protected, 4.Readonly
// 1: Public= We can access and modify it from anywhere
// 2. Private: We can't access it from outside
// 3. Protected: We can access it from outside if only extend the class
// 4. Readonly: Only can get or read value

class User{
    userName:string;
    age:number;
    private Roll:number;
    constructor(userName:string, age:number){
        this.userName=userName;
        this.age=age;
    }
    display():void{
        console.log(`UserName: ${this.userName}, Age: ${this.age}`);
    }
    setRole(Roll:number){
        this.Roll=Roll;
    }
    getRoll():number{
        return this.Roll;
    }
}

class Student extends User{
    studentId:number;

    constructor(userName:string, age:number,studentId:number){
        super(userName,age);
        this.studentId=studentId;
    }
}

let student1=new Student("Maidul",22,2222);

student1.setRole(121);
// console.log(student1);
console.log(student1.getRoll())
