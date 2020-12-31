class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        this.s1=loadImage("sprites/sling1.png")
        this.s2=loadImage("sprites/sling2.png")
        this.s3=loadImage("sprites/sling3.png")
        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        image(this.s1,100,120,50,100)
        image(this.s2,65,127,50,50)
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            image(this.s3,pointA.x-20,pointA.y,10,10)
           push ();
            stroke (color(84,39,15));
            line(pointA.x-20, pointA.y, pointB.x-132, pointB.y+43);
            line(pointA.x-20, pointA.y, pointB.x-55, pointB.y+45);
            pop();
        }
    }
    
}