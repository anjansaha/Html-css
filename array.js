var array1=["a","b","c"];
var array2=[1,2,3];
var c= array1.concat(array2);
document.write(c);
//alternet
var a=["a","b","c"];
var b=[1,2,3];
var d=[];
var i,l,n;
i= a.length;
l=b.length;
if(i>l){
    for(n=0;n<i;n++){
        d.push(a[n], b[n]);
    }
}else{
    for(n=0;n<l;n++){
        d.push(a[n], b[n]);
    }
}
document.write(d)
//
var b="anjan b saha";
var array3= b.split("");
document.write(array3);
var i;
var l= array3.length;
var y=[];
for(i=0;i<l;i++){
    if(array3[i] !=a&& array3[i]!=b){
         y.push(array3[i]);
    }
}
document.write(y);
//sum of arry
var x=[1,4,8,5]
x.sort;
document.write(x.sort());
var sum=0;
for(i=0; i< x.length; i++){
    sum=sum+x[i];
}
document.write(sum);

