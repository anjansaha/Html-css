//q1
fun1=x =>{
    
    if(x%2==0){
        return "Even number";
    }
    else{
        return "odd number";
    }
}

function fun2(){
    let X= document.getElementById("num").value;
    alert(fun1(X));
}
//q2
const max=(x,y,z)=>{
    var a=0;
    const b=[x,y,z];
    for(i=0;i<3;i++){
        if(b[i]>a){
            a=b[i];
        }
    }
    return a;
}
//q24
function func(a){
    let b=  a.toString().split("");
    console.log(b);
}


//q25

function fund(a){
    let x=0;
    let y=1;
    let z=0;
    let v=[];
    let c=[]
    const b=  a.toString().split("");
    
    for(i=0;i<b.length; i++){
        c[i]=1*b[i];
        y=y*b[i];
        if(b[i]>z){
            z= b[i]-z;
        }else{
            z=z-b[i];
        }
        
    }
    for(i=0;i<b.length; i++){
        x=x+c[i];
    }

    v=[x,y,z];
    document.write(v);
}

fund(1234);
