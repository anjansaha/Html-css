//object
var myCar={
    maxSpeed: 20,
    driver:"anjan",
    Time: 2,
    distance: function(){
        console.log(this.Time);
    }

};
myCar.driver;
//consroctor
var Car= function(time, speed){
    this.time= time;
    this.speed=speed;
    this.distance= function(time, spees){
        console.log(time*speed);
    }
}
var myCar1= new Car(25, 50);
var myCar2=new Car(30, 40);
myCar1.time;

