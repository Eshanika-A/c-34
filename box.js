class Box {
   constructor(x,y,width,height){
       var options={
  'restitution': 1,
  'friction' : 1 ,
     density:1,
     isStatic:true

       }
    this.body = Bodies.rectangle(x,y,width, height,options);
    this.width=this.width;
    this.height=this.height;
    World.add(world, this.body);
    
   }

display(){
var angle = this.body.angle;
push();
translate(this.body.position.x,this.body.position.y);
rotate(angle);

rectMode(CENTER);
rect(this.body.position.x,this.body.position.y,this.height,this.width);
pop();
 }
}