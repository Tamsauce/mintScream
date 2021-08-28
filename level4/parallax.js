const canvasBG = document.getElementById('canvas1')
const ctxBG = canvasBG.getContext('2d')
const CANVAS_WIDTH = canvasBG.width = 800
const CANVAS_HEIGHT = canvasBG.height = 700
let gameSpeed = 2

const backgroundLayer1 = new Image()
backgroundLayer1.src = 'images/1.png'
const backgroundLayer2 = new Image()
backgroundLayer2.src = 'images/2.png'
const backgroundLayer3 = new Image()
backgroundLayer3.src = 'images/3.png'
const backgroundLayer4 = new Image()
backgroundLayer4.src = 'images/4.png'
const backgroundLayer5 = new Image()
backgroundLayer5.src = 'images/5.png'
const backgroundLayer6 = new Image()
backgroundLayer6.src = 'images/6.png'
const backgroundLayer7 = new Image()
backgroundLayer7.src = 'images/7.png'
const backgroundLayer8 = new Image()
backgroundLayer8.src = 'images/8.png'
const backgroundLayer9 = new Image()
backgroundLayer9.src = 'images/9.png'

class Layer {
	constructor(image, speedModifier){
		this.width = 2400;
		this.height = 700; 
		this.x = -this.width;
		this.y = 0;
		this.x2 = this.width;
		this.image = image;
		this.speedModifier = speedModifier;
		this.speed = gameSpeed * this.speedModifier;
	}
	update(){
		this.speed = gameSpeed * this.speedModifier;
		if (this.x <= -this.width){
			this.x = 0
		}
		if (this.x2 <= -this.width){
			this.x2 = this.width + this.x - this.speed;	
		}
		this.x = Math.floor(this.x + this.speed);
		this.x2 = Math.floor(this.x2 - this.speed);
	}
	draw(){
		ctxBG.drawImage(this.image, this.x, this.y, this.width, this.height);
		//ctxBG.drawImage(this.image, this.x2, this.y, this.width, this.height);
	}
}

const layer1 = new Layer(backgroundLayer1, 0.11);
const layer2 = new Layer(backgroundLayer2, 0.22);
const layer3 = new Layer(backgroundLayer3, 0.33);
const layer4 = new Layer(backgroundLayer4, 0.44);
const layer5 = new Layer(backgroundLayer5, 0.55);
const layer6 = new Layer(backgroundLayer6, 0.66);
const layer7 = new Layer(backgroundLayer7, 0.77);
const layer8 = new Layer(backgroundLayer8, 0.88);
const layer9 = new Layer(backgroundLayer9, 0.99); // speed relative to gameSpeed

const gameObjects = [layer1, layer2, layer3, layer4, layer5, layer6, layer7, layer8, layer9];

function animate(){
	ctxBG.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT)
	gameObjects.forEach(object => {
		object.update();
		object.draw();
	})
	requestAnimationFrame(animate);
}
animate()