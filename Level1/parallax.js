const canvas = document.getElementById('canvas1')
const ctx = canvas.getContext('2d')
const CANVAS_WIDTH = canvas.width = 800;
const CANVAS_HEIGHT = canvas.height = 700;
let gameSpeed = 19;


const backgroundLayer1 = new Image();
backgroundLayer1.src = 'images/levelBlue/1blue.png';
const backgroundLayer2 = new Image();
backgroundLayer2.src = 'images/levelBlue/2blue.png';
const backgroundLayer3 = new Image();
backgroundLayer3.src = 'images/levelBlue/3blue.png';
const backgroundLayer4 = new Image();
backgroundLayer4.src = 'images/levelBlue//4blue.png';
const backgroundLayer5 = new Image();
backgroundLayer5.src = 'images/levelBlue/5blue.png';
const backgroundLayer6 = new Image();
backgroundLayer6.src = 'images/levelBlue/6blue.png';
const backgroundLayer7 = new Image();
backgroundLayer7.src = 'images/levelBlue/7blue.png';
const backgroundLayer8 = new Image();
backgroundLayer8.src = 'images/levelBlue/8blue.png';
const backgroundLayer9 = new Image();
backgroundLayer9.src = 'images/levelBlue/9blue.png';

let x = 0;
let x2 = 1900; // size of our image width, vid example uses 2400, at 12:20

class Layer {
    constructor(image, speedModifier){
        this.x = 0;
        this.y = 0;
        this.width = 1900;
        this.height = 700;
        this.x2 = this.width;
        this.image = image;
        this.speedModifier = speedModifier;
        this.speed = gameSpeed * this.speedModifier;
    }
    update(){
        this.speed = gameSpeed * this.speedModifier;
        if(this.x <= this.width){
            this.x = this.width + this.x - this.speed;
        }
    }
    draw(){
        ctx.drawImage(this.image, this.x, this.y, this.width. this.height);
        ctx.drawImage(this.image, this.x2, this.y, this.width. this.height);

    }
}
const layer1 = new Layer(backgroundLayer1, 0.11)
const layer2 = new Layer(backgroundLayer2, 0.22)
const layer3 = new Layer(backgroundLayer3, 0.33)
const layer4 = new Layer(backgroundLayer4, 0.44)
const layer5 = new Layer(backgroundLayer5, 0.55)
const layer6 = new Layer(backgroundLayer6, 0.66)
const layer7 = new Layer(backgroundLayer7, 0.77)
const layer8 = new Layer(backgroundLayer8, 0.88)
const layer9 = new Layer(backgroundLayer9, 0.99)

const gameObjects = [layer1, layer2, layer3, layer4, layer5, layer6, layer7, layer8, layer9];

function animate(){
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    gameObjects.forEach(object => {
        object.update();
        object.draw();
    })
    requestAnimationFrame(animate);
}
animate();


