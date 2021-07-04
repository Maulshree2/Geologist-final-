class Iron{
	constructor(x,y)
	{
	// assign options to the rubber ball
	 var options={
		 restitution:0.8,
		 friction:3,
		density:30
		 }
		this.x=x;
		this.y=y;
		this.width=80;
        this.height=50;
		this.body=Bodies.rectangle(this.x, this.y, 80,80,options);
		World.add(world, this.body);

	}
	display()
	{
			var pos=this.body.position;		
			push()
			translate(pos.x, pos.y);
			rectMode(CENTER)
			strokeWeight(4);
			stroke("brown");
			fill("brown");
			
            rect(0,0,this.width,this.height);
			pop()
	}

}