var car, wall;
var speed, weight, deformation;
var ftx, fty;

function setup() {
  createCanvas(1600, 400);
  speed = random(55, 90);
  weight = random(400, 1500);
  car = createSprite(50, 200, 50, 50);
  wall = createSprite(1500, 200, 60, height/2);
  car.velocityX = speed;
  wall.shapeColor = (80, 80, 80);
  car.shapeColor = (255, 255, 255);
  car.debug = true;
  wall.debug = true;
}

function draw() {
  background(0, 0, 0);
  if(car.x - wall.x < wall.width/2 + car.width/2
    && wall.x - car.x < wall.width/2 + car.width/2 && car.y - wall.y < wall.height/2 + car.height/2
    && wall.y - car.y < wall.height/2 + car.height/2){
    car.velocityX = 0;
    deformation = (0.5*speed*speed*weight)/22500;
  }
  if(car.x - wall.x < wall.width/2 + car.width/2
    && wall.x - car.x < wall.width/2 + car.width/2 && car.y - wall.y < wall.height/2 + car.height/2
    && wall.y - car.y < wall.height/2 + car.height/2){
    car.x = 1445;
  }
  if(deformation >= 180){
    car.shapeColor = "red"
  }
  if(deformation > 80 && deformation < 180){
    car.shapeColor = "yellow"
  }
  if(deformation <= 80){
    car.shapeColor = "green"
  }
  drawSprites();
}

