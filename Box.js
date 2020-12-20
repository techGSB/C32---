
class Box{
    constructor(x,y,w,h){
        var options = {
            isStatic:false
        }
 
        this.x=x;
        this.y=y;
        this.w=w;
        this.h=h;
        this.body=Bodies.rectangle(x, y, w, h , options);
 		World.add(world, this.body);
    }
    display()
	{
        if(this.body.speed < 5){
            var angle = this.body.angle;
            push();
            translate(this.body.position.x, this.body.position.y);
            rotate(angle);
            fill("purple");
            rectMode(CENTER);
            rect(0, 0, this.width, this.height);
            pop();
          }
          else{
               World.remove(world, this.body);
               push();
               this.Visiblity = this.Visiblity - 5;
               tint(255, this.Visiblity);
               fill("purple");
               pop();
              }
			
    }
    score()
    {if(this.Visibility<0&&this.Visibility>-1005){
        score++;
    }

    }
}