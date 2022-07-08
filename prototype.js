function Particle(){
    this.x=100;
    this.y=99;
}

Particle.prototype.show=function(){
    console.log(this.x);
    console.log("hello i am a particle");
}


Particle.prototype.update=function(){
    console.log("i am update the");
}

function Point(){
    Particle.call(this)
}

Point.prototype=Object.create(Particle.prototype);

Point.prototype.show=function(){
    console.log("hello i am a point");
}

var p  = new Particle();
var point  = new Point();

console.log(p.show());
console.log(point.show());

//Object.prototype
//__proto__