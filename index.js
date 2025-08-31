// union data type= string or number multiple data types
// let userId:(string | number | boolean);
// userId=101;
// userId="202";
// userId=false;
// function displayUserInfo(userId: string|number|boolean){
//     console.log(userId);
// }
// displayUserInfo(101);
// displayUserInfo(false)
//==================== Array data type======================
// let userNames:Array<string>;
// userNames=["maidul","heryy"]
// console.log(userNames);
// let userId : (string|number)[];
// userId=["101",444];
// console.log(userId);
//==================== Tuple data type======================
// mixed data type key:value pairs
// let user:[number,string];
// user=[101,"Maidul"];
// console.log(user);
// user.push(102,"Jahid");
// console.log(user)
//==================== Enum data type======================
// Enum store constant data types
// There are 3 types of enums 1.Numeric, 2. String, 3. Hetergenous
// Numeric enum
// enum requestType{
//     readData=1,
//     saveData=2,
//     deleteData=3,
// }
// console.log(requestType);
//string enum
// enum requestType2{
//     readData="READ_Data",
//     deleteData="DELETE_Data"
// }
// console.log(requestType2)
// hetergenous enum
// enum RequestType3{
//     readData="Read_data",
//     saveData="Save_data",
//     deleteData=101
// }
// // console.log(RequestType3);
// console.log(RequestType3.deleteData);
//==================== Any data type======================
// We can define any data types here
var userId;
userId = 101;
userId = "303";
userId = true;
userId = [101, "202"];
console.log(userId);
