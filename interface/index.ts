// Create Interface here 
interface IStudent{
    id:number;
    name:string;
    year:number;
    isGraduate:boolean;
}
// here declare an array which holds on objects of students
let Students:IStudent[]=[];

let student1:IStudent={
    id:1,
    name:"Mr kawwa",
    year:2023,
    isGraduate:true
}
let student2:IStudent={
    id:2,
    name:"Mr Kader",
    year:2025,
    isGraduate:false
}

Students.push(student1);
Students.push(student2);
const printStudentInfo=(student:IStudent)=>{
    console.log(`Student ID: ${student.id}, Name: ${student.name}, Year: ${student.year}, IsGraduate: ${student.isGraduate}`)
}

Students.forEach(student=>printStudentInfo(student));