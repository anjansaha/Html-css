//q3
function* ArmstrongNumber(){
    let i=0;
    yield 1;
    yield 153;
    yield 370;
    yield 371;
    yield 407;
    while(true){
        return "error! avobe one thousend";
    }

}
const getNextArmStrong= ArmstrongNumber();
console.log(getNextArmStrong.next().value)
//or
/*function* ArmstrongNumber(start=0,end=5,step=1){
    let i=0;
    for(i=start;i<end;i+=step){
    yield 1;
    yield 153;
    yield 370;
    yield 371;
    yield 407;
    }
}
const getNextArmStrong= ArmstrongNumber();
console.log(getNextArmStrong.next())*/
//for of
let arr=[1,153,370,371,407]
for(i of arr){
    console.log(i);
}
//q2
const ArmstrongNumber=[1,153,370,371,407];
const getNextArmStrong = ArmstrongNumber[Symbol.iterator]();
document.write(JSON.stringify(getNextArmStrong.next()));

//q1
class fibonaci{
    var i=0;
    constructor(arr){
        this.arr= array;
    }
    
    get next(){
        i++;
        return arr[i];
        
    }
 
}
const fiboNumber= new fibonaci(fibonaciNumber);
console.log(fibonaciNumber.next());