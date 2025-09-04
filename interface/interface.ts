interface IUserInterface{
    formatUser:()=> string;
}

class Users implements IUserInterface{
    constructor(private fullName:string,private age:number){

    }
    formatUser= () => {
        return `Name: ${this.fullName} Age: ${this.age}`
    }
}
let user1= new Users("Mr Potato",11);
console.log(user1)