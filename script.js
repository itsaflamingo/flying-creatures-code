/**@type {HTMLCanvasElement} */
const canvas = document.getElementById('canvas1')
const ctx = canvas.getContext('2d')
CANVAS_WIDTH = canvas.width = 500
CANVAS_HEIGHT = canvas.height = 1000
const numberOfEnemies = 300
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
        this.image.src = 'enemy1.png'
        // random num between -2 and +2
        // this.speed = Math.random() * 4 - 2 
        this.spriteWidth = 293
        this.spriteHeight = 155
        this.width = this.spriteWidth / 2.5
        this.height = this.spriteHeight / 2.5
        this.x = Math.random() * (canvas.width - this.width)
        this.y = Math.random() * (canvas.height - this.height)

        this.frame = 0
        // flaps randomly at speed between 1 and 4
        this.flapSpeed = Math.floor(Math.random() * 3 + 1)
    }
    update() {
        this.x += Math.random() * 5 - 2.5
        this.y += Math.random() * 5 - 2.5
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