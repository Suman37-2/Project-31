class Drop{
constructor(x,y,width,height){
var options={
   isStatic:true,
   friction:0.1 
}
this.rain=Bodies.rectangle(x,y,width,height,options);
this.width=width;
this.height=height;
World.add(myWorld,this.rain);

}
display(){
var pos=this.rain.position;
push();
ellipseMode(CENTER);
fill("blue");
ellipse(pos.x,pos.y,this.width,this.height);
pop();
}
}