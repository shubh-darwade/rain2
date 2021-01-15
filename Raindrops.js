class rainDrops
{
    constructor(x,y)
    {
        this.body = Bodies.circle(x,y,5/2);
        this.x=x;
        this.y=y;
        World.add(world,this.body);
    }

    display()
    {
    
        fill("blue");
        circle(this.x,this.body.position.y,5);
    }

}