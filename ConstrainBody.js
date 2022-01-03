class ConstrainBody{
constructor(bodyA,bodyB){
    var options= {
        bodyA:bodyA,
        bodyB:bodyB,
        stiffness:1,
        length:30,
    }
    this.thread=Matter.Constraint.create(options)
    World.add(world,this.thread);
}
    display(){
        var A=this.thread.bodyA.position;
        var B=this.thread.bodyB.position;
        strokeWeight(5);
        line (A.x,A.y,B.x,B.y);
    }
}