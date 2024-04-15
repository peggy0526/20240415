let bg = ["#F2EDEC"];
var lions = []
var lion
class lion_class{
  constructor(args){
    this.p = args.p || {x:width/2,y:height/2};
    this.w = args.w || random(100,120);
    this.h = args.h || random(10,12);
    this.d = args.d || random(50,120);
    this.v = args.v || {x:random(-2,2),y:random(-2,2)}
    this.a = args.a || {x:0,y:random(0.7,1.2)}
    this.mode = random(["happy","bad"])
    
  }
  draw(){
    push();
      translate(this.p.x + this.w / 2, this.p.y + this.h / 2);

      // rotate(random(-40, 40));

      //  カオ
      push();
      noFill();

      strokeWeight(this.w / 2.7);
      drawingContext.setLineDash([1, this.w / 5]);

      stroke("#605951");
      ellipse(0, 0, this.d, this.d / 1.12);
      pop();

      noStroke();
      fill("#EBC06F");
      ellipse(0, 0, this.d, this.d / 1.12);



      // //  メ 眼睛
      fill("#605951");
      // circle(-this.d / 6, -this.d / 50, this.d / 7.5);
      // circle(this.d / 6, -this.d / 50, this.d / 7.5);
      if(this.mode=="happy"){
        //  メ 眼睛
      fill("#605951");
      circle(-this.d / 6, -this.d / 50, this.d / 15);
      circle(this.d / 6, -this.d / 50, this.d / 15);

      }
      else{
          //  メ 眼睛
      fill("#605951");
      circle(-this.d / 6, -this.d / 50, this.d / 7.5);
      circle(this.d / 6, -this.d / 50, this.d / 7.5);

      }

      //  クチ 嘴巴
      fill(bg);
      ellipse(0, this.d / 7.5, this.d / 2.2, this.d / 3);

      //  ハナ 花
      fill("#605951");
      ellipse(0, this.d / 11, this.d / 5, this.d / 7);

      //  ミミ
      fill("#EBC06F");
      

      arc(-this.d / 3, -this.d / 3.5, this.d / 4, this.d / 4, 180, 360);
      arc(this.d / 3, -this.d / 3.5, this.d / 4, this.d / 4, 180, 360);
      
      


      pop();


  }
  update(){
    if(this.mode == "happy"){
      this.p.y = this.p.y + sin(frameCount+this.d)
    }
    else{
      this.p.x = this.p.x + this.v.x  //x軸
      this.p.y = this.p.y + this.v.y  //y軸  
    }
    // this.p.x = this.p.x +this.v.x
    // this.p.y = this.p.y +this.v.y
    // this.v.y = this.v.y +this.a.y
    // this.v.x = this.v.x * 0.09
    // this.v.y = this.v.y * 0.09
    if(this.p.x<0){
      this.v.x = -this.v.x
    }
    if(this.p.x>width){
      this.v.x = -this.v.x
    }
    if(this.p.y<0){
      this.v.y = -this.v.y
    }
    if(this.p.y>height){
      this.v.y = -this.v.y
    }

  }

}

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  background(bg);
  for(i=0;i<10;i=i+1){  //產生多個球資料
    lion = new lion_class({   //傳一串參數直到class內 
      v:{x:random(-2,2),y:random(-2,2)},
      p:{x:random(0,width),y:random(0,height)},
      a:{x:0,y:0}
     })
    lions.push(lion)}
    print(lions)
 }

function draw() {
  background(bg);
  for(j=0;j<lions.length;j=j+1){
   lion = lions[j]
   lion.draw()   //繪出球的位子
   lion.update()
  }
 }
 function mousePressed(){
  lion = new lion_class({   //傳一串參數直到class內 
    v:{x:random(-2,2),y:random(-2,2)},
    p:{x:mouseX,y:mouseY},
    a:{x:0,y:0}
   })
   lions.push(lion)
   }
