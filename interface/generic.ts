// generic allow to accept all data types
const printUserInfo=<X,Y>(userName:X, userAge:Y)=>{
    console.log(`Name: ${userName} Age: ${userAge}`)
}
printUserInfo("Maidu",22);
printUserInfo(11,true);