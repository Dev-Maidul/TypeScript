// inheritance in typescript
class User{
    userName:string;
    age:number;
    gender:string;

    constructor(userName:string,age:number,gender:string){
        this.userName=userName;
        this.age=age;
        this.gender=gender;
    }
    display():void{
        console.log(`User Name: ${this.userName}, Age:${this.userName}, Gender:${this.gender}`);
    }
}

class Student extends User{
    studentId:number;
    
    constructor(userName:string,age:number,gender:string,studentId:number){
        super(userName,age,gender);
        this.studentId=studentId;
    }
    display(): void {
        console.log(`User Name: ${this.userName}, Age:${this.userName}, Gender:${this.gender},Student ID: ${this.studentId}`);
    }
}
let student1=new Student("Maidul Islam",25,"Male",2023030077);
student1.display();