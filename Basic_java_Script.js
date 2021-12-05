/*var myVar= true;
if(myVar){
    document.write("True");
}
else{
     document.write("false");
}
//alert("Hello")
if(5<10){
    document.write("True");
}
var x=5;
document.write(x==6);
var x="6"
document.write(x==6);
document.write(x===6);
document.write(x=="6");*/
function fun1(){
    var x= document.getElementById("text1").value;
    if(x%2==0){
        alert("Even Number");
    }
    else{
        alert("Odd number")
    }
}
function fun2(){
    var y= document.getElementById("text2").value;
    var n=0;
    var b=0;
    for(n=0;n<=y;n++){
        b=b+n;
        
    }
    alert(b);
}
function fun3(){
    var y= document.getElementById("text3").value;
    var n=1;
    var b=0;
    for(n=1;n<=y;n++){
        if(n%3==0 || n%5==0){
            b=b+n;
        }
        
        
    }
    alert(b);
}
var x=[1,44,67,8,9,33,67];
var b=0;
for(var i=0;i<x.length;i++){
    if(b<x[i]){
        b=x[i];
    }
}
document.write(b);