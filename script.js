/**@type {HTMLCanvasElement} */
const canvas = document.getElementById('canvas1')
const canvas2 = document.getElementById('canvas2')

const ctx = canvas.getContext('2d')
const ctx2 = canvas.getContext('2d')
CANVAS_WIDTH = canvas.width = 500
CANVAS_HEIGHT = canvas.height = 1000
const numberOfEnemies = 200
const enemiesArray = []

// enemy1 = {
//     x: 10,
//     y: 50,
//     width: 200,
//     height: 200,
// }
let gameFrame = 0

class Enemy {
    constructor() {
        this.image = new Image()
        this.image.src = 'enemy3.png'
        // random num between -2 and +2
        this.speed = Math.random() * 4 + 1
        this.spriteWidth = 218
        this.spriteHeight = 177
        this.width = this.spriteWidth / 2
        this.height = this.spriteHeight / 2
        this.x = Math.random() * (canvas.width - this.width)
        this.y = Math.random() * (canvas.height - this.height)

        this.frame = 0
        // flaps randomly at speed between 1 and 4
        this.flapSpeed = Math.floor(Math.random() * 3 + 1)
        this.angle = 0 
        this.angleSpeed = Math.random() * 2 + 0.5
        this.curve = Math.random() * 200 + 50
    }
    update() {
        this.x = canvas.width/2 * Math.sin(this.angle * Math.PI/90) + canvas.width/2 - this.width/2
        this.y = canvas.height/2 * Math.cos(this.angle * Math.PI/270) + canvas.height/2 - this.height/2
        this.angle += this.angleSpeed
        // this.x += Math.random() * 5 - 2.5
        // this.y += Math.random() * 5 - 2.5
        if(this.x + this.width < 0) this.x = canvas.width
        // animate sprites
        // Only run this code every 2 loops
        if(gameFrame % 2 === 0) {
            this.frame > 4 ? this.frame = 0 : this.frame++
        }
    }
    draw() {
        ctx.drawImage(this.image, this.frame * this.spriteWidth, 0, this.spriteWidth, this.spriteHeight, this.x, this.y, this.width, this.height)
    }
}

// const enemy1 = new Enemy()
// const enemy2 = new Enemy()

for(let i = 0; i<numberOfEnemies; i++) {
    enemiesArray.push(new Enemy())
}

function animate() {
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT)
    // enemy1.x++
    // enemy1.y++
    // enemy2.x+=0.5
    // enemy2.y+=0.5
    // enemy1.update()
    // enemy1.draw()
    enemiesArray.forEach(enemy => {
        enemy.update()
        enemy.draw()
    })
    gameFrame++
    requestAnimationFrame(animate)
}
animate()