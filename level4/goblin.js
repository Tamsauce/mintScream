const canvas = document.getElementById('canvas2')
const ctx = canvas.getContext('2d')
canvas.width = window.innerWidth
canvas.height = window.innerHeight
const collisionCanvas = document.getElementById('collisionCanvas')
const collisionCtx = collisionCanvas.getContext('2d')
collisionCanvas.width = window.innerWidth;
collisionCanvas.height = window.innerHeight;

let score = 30
let gameOver = false
let advanceNextLevel = false 
ctx.font = '3rem Impact'

let timeToNextGoblin = 0
let goblinInterval = 700
let lastTime = 0

let goblins = [];
class Goblin {
    constructor(){
        this.spriteWidth = 451;
        this.spriteHeight = 508;
        this.sizeModifier = Math.random() * 0.3 + 0.2;
        this.width = this.spriteWidth * this.sizeModifier;
        this.height = this.spriteHeight * this.sizeModifier;
        this.x = -this.width;
        this.y = Math.random() * (canvas.height - this.height);
        this.directionX = Math.random() * 5 + 1;
        this.directionY = Math.random() * 5 - 13;
        this.markedForDeletion = false
        this.image = new Image();
        this.image.src = 'images/goblin.png';
        this.frame = 0
        this.maxFrame = 4
        this.timeSinceMove = 0;
        this.moveInterval = Math.random() * 250 + 250
        this.randomColors = [Math.floor(Math.random() * 255),Math.floor(Math.random() * 255),Math.floor(Math.random() * 255)]
        this.color = `rgb(${this.randomColors[0]},${this.randomColors[1]}, ${this.randomColors[2]}`
        this.hasTrail = Math.random() > 0.5; // trails are heavy, so this only adds trails to about half of all Goblins, paired with line 54
    }
    update(deltaTime){
        if(this.y < 0 || this.y > canvas.height - this.height){
            this.directionY = this.directionY * -1;
        }
        this.x += this.directionX;
        this.y += this.directionY
        if(this.x < 0 - this.width) this.markedForDeletion = true;
        this.timeSinceMove += deltaTime
        if(this.timeSinceMove > this.moveInterval){
            if(this.frame > this.maxFrame) this.frame = 0
            else this.frame++;
            this.timeSinceMove = 0;
            if (this.hasTrail){
               for(let i = 0; i < 5; i++){
                particles.push(new Particle(this.x, this.y, this.width, this.color));
               }
               
            
        }
    }
        if(this.x > 1600 -this.width) gameOver = true
        
    }
    draw(){
        collisionCtx.fillStyle = this.color;
        collisionCtx.fillRect(this.x, this.y, this.width, this.height);
        ctx.drawImage(this.image, this.frame * this.spriteWidth, 0, this.spriteWidth, this.spriteHeight, this.x, this.y, this.width, this.height);
    }
}

let explosions = [];
class Explosion {
    constructor(x, y, size){
        this.image = new Image();
        this.image.src = 'images/boom.png';
        this.spriteWidth = 200;
        this.spriteHeight = 179;
        this.size = size;
        this.x = x;
        this.y = y; 
        this.frame = 0; 
        this.sound = new Audio();
        this.sound.src = 'sounds/boom.wav'
        this.timeSinceLastFrame = 0;
        this.frameInterval = 200;
        this.markedForDeletion = false
    }
    update(deltaTime){
        if(this.frame === 0) this.sound.play();
        this.timeSinceLastFrame += deltaTime;
        if( this.timeSinceLastFrame > this.frameInterval){
            this.frame++
            this.timeSinceLastFrame = 0;
            if(this.frame > 5) this.markedForDeletion = true
        }
    }
    draw(){
        ctx.drawImage(this.image, this.frame * this.spriteWidth, 0, this.spriteWidth, this.spriteHeight, this.x, this.y - this.size/4, this.size, this.size)
    }
}

let particles = [];
class Particle {
    constructor(x, y, size){
        this.size = size;
        this.x = x + this.size/2 + Math.random() * 50 - 25
        this.y = y + this.size/3 + Math.random() * 50 - 25
        this.radius = Math.random() * this.size/10;
        this.maxRadius = Math.random() * 20 + 35;
        this.markedForDeletion = false;
        this.speedX = Math.random() * 1 + 0.5;
        this.color = 'rgb(18,181,123';
    }
    update(){
        this.x += this.speedX;
        this.radius += 0.3; // too many particles, or too big, can affect frame rate and performance
        if (this.radius > this.maxRadius -5) this.markedForDeletion = true; //-5 changes last 'poof' to be transparent, rather than blinking solid
    
    }
    draw(){
        ctx.save(); // creates a snapshot of current canvas global settings
        ctx.globalAlpha = 1 - this.radius/this.maxRadius;
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore(); // back to global variables, so only the variables in this code block are affected
    }
}

function drawScore(){
    ctx.font = '2rem Impact';
    ctx.fillStyle = 'black';
    ctx.fillText('Score: ' + score, 20, 115)
    ctx.fillStyle = 'white';
    ctx.fillText('Score: ' + score, 22, 117)
}

function drawLevel(){
    ctx.font = '2rem Impact';
    ctx.fillStyle = 'black';
    ctx.fillText('Level: 3', 20, 65)
    ctx.fillStyle = 'white';
    ctx.fillText('Level: 3', 22, 67)
}


function drawGameOver(){
    ctx.font = '5rem Nosifer';
    ctx.textAlign = 'center'
    ctx.fillStyle = 'black';
    ctx.fillText(`GAME OVER!`, canvas.width/2, canvas.height/2)
    ctx.fillStyle = 'orange';
    ctx.fillText(`GAME OVER!`, canvas.width/2 +2, canvas.height/2+2)

}

function drawFinalScore(){
    const audio = new Audio('sounds/gameOver.mp3')
    if(score < 40) audio.play()
    ctx.font = '3rem Impact';
    ctx.textAlign = 'center'
    ctx.fillStyle = 'black';
    ctx.fillText(`Final Score: ${score}`, canvas.width/2, canvas.height/2 + 70)
    ctx.fillStyle = 'white';
    ctx.fillText(`Final Score: ${score}`, canvas.width/2 + 2, canvas.height/2 + 72)

}


function drawWinner(){
    const audio = new Audio('sounds/winner.flac')
    audio.play()
    ctx.font = '5rem Nosifer';
    ctx.textAlign = 'center'
    ctx.fillStyle = 'black';
    ctx.fillText(`WINNER!`, canvas.width/2, canvas.height/2)
    ctx.fillStyle = 'orange';
    ctx.fillText(`WINNER!`, canvas.width/2 + 2, canvas.height/2)
   
}

window.addEventListener('click', function(e){
    const detectPixelColor = collisionCtx.getImageData(e.x, e.y, 1, 1)
    console.log(detectPixelColor)
    const pc = detectPixelColor.data;
    goblins.forEach(obj => {
        if(obj.randomColors[0] === pc[0] && obj.randomColors[1] === pc[1] && obj.randomColors[2] === pc[2]){
            obj.markedForDeletion = true
            score++
            explosions.push(new Explosion(obj.x, obj.y, obj.width))
            if(score >= 40) advanceNextLevel = true 
        }
        
       
    })
})

const goblin = new Goblin();

function animate(timestamp){
    ctx.clearRect(0,0, canvas.width, canvas.height)
    collisionCtx.clearRect(0,0,canvas.width, canvas.height)
    let deltaTime = timestamp - lastTime
    lastTime = timestamp
    timeToNextGoblin += deltaTime
    if(timeToNextGoblin > goblinInterval){
        goblins.push(new Goblin())
        timeToNextGoblin = 0
        goblins.sort((a, b) => a.width - b.width)
       
    }
    drawScore(), drawLevel();
    [...particles, ...goblins, ...explosions].forEach(obj => obj.update(deltaTime));
    [...particles, ...goblins, ...explosions].forEach(obj => obj.draw());
    goblins = goblins.filter(obj => !obj.markedForDeletion)
    explosions = explosions.filter(obj => !obj.markedForDeletion)
    particles = particles.filter(obj => !obj.markedForDeletion)
    
    if(advanceNextLevel) drawWinner(), drawFinalScore()
    else if(!gameOver)requestAnimationFrame(animate)
    else drawGameOver(), drawFinalScore()

}

animate(0)



