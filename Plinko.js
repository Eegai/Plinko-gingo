class Plinko{
    constructor(x,y,r){
        var options = {
            isStatic: true
        }
        r= r
        this.body = Bodies.circle(x,y,r,options);
        World.add(world,this.body);
    }
    display(){
       fill("white")
        push();
        ellipse(this.body.position.x, this.body.position.y,16,16);
        pop();
        noFill();
      }
}