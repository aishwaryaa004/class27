class chain{

constructor(bodyA,bodyB){
 var  option={
bodyA:bodyA,
bodyB:bodyB,
stiffness:0.04,
length:10


}
this.body= Constraint.create(option)

World.add(world,this.body)


}



display(){

    var A = this.body.bodyA.position
    var B = this.body.bodyB.position
    push()
    strokeWeight(10)
    stroke("pink")
    line(A.x,A.y,B.x,B.y)
    pop()
}






}