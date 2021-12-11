//q1
const a=0;
let b=1;
a=a+b;// error
b=a+b;//11
//q2
const i=2;
if (i==2){
    let a=2;
}
a= a+i;// error
//q3
var order={
    id: 20,
    title:"Briyani",
    prize: 200,
    printOrder: function(){
        console.log(this.title);
    },
    getPrize: function(){
        console.log(this.prize);
        
    }

};
Object.assign({}, order);
//q4

let Name=[];
let Length=[];
let newArr=[];
let len=(array)=>{
    for(i=0;i<array.length;i++)
    {
        Name[i]= array[i];
        Length[i]= array[i].length;
        newArr[i]=[`name:${Name[i]} length:${Length[i]}`];
    }
    console.log(newArr);
}
let names=["tom","even","jerry"];
len(names);
//q5
//a
function add(...inputs){
    console.log(inputs);
    let sum=0;
    for(i of inputs){
        sum += i;
    }
    console.log(sum);
}
add(1,2,3,4,5,6,7,8,9);
//b
function userFriends(UserName, ...friends){
    console.log(`User name:${UserName}`);
    let a=[];
    for(i of friends){
        a[i]=i;
    }
    console.log(`list of friends ${friends}`);
}
userFriends("Anjan", "akash","a","hori","b","c");
//c
function NameCapital(...names){
    console.log(names);
    let upname=[];
    for(i of names){
        upname[i]= i.toUpperCase();
    }
    console.log(upname);
}
let Name=["anjan","ajsjsm","oksodi","isjisj"]
NameCapital(...Name);
//q6
function laptop(model, daskNo, name ){
    console.log(`Tickits for laptop model:${model}, desk no:${daskNo}, name:${name}`);
}
laptop("LIN234", 54, "Anjan" );
//q7
//a
let arr=[1,2,8,9,7,6];

let[top1,top2,top3,top4,top5]= arr;
console.log(top3)
//b
let Organization={
    Name:"Cap",
    Addrace:{
        Area: "Bengalore",
        pin:5778889
    }
}
let {Addrace:{pin:pin}}=Organization;
console.log('pin:',pin)
