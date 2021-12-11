function fun1(){
    var x=document.getElementById("convart").value;
    var y=document.getElementById("doller").value;
    if(x==1){
        var s=y*74.28;
        alert(s);
    }
    else if(x==2){
        var s=y*109.4;
        alert(s);
    }
    else if(x==3){
        var s=y*0.84;
        alert(s);
    }
    else{
        var s=y*.72;
        alert(s);
    }
}
 var ho= document.getElementByTagName("h1");
ho[0].innerHTML="YO YO";