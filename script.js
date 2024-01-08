/**@type {HTMLCanvasElement} */
const canvas = document.getElementById('canvas1')
const ctx = canvas.getContext('2d')
CANVAS_WIDTH = canvas.width = 500
CANVAS_HEIGHT = canvas.height = 1000
const numberOfEnemies = 100
const enemiesArray = []

// enemy1 = {
//     x: 10,
//     y: 50,
//     width: 200,
//     height: 200,
// }

class Enemy {
    constructor() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.width = 100
        this.height = 100
        // random num between -2 and +2
        this.speed = Math.random() * 4 - 2 
    }
    update() {
        this.x += this.speed
        this.y += this.speed
    }
    draw() {
        ctx.fillRect(this.x, this.y, this.width, this.height)
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

    requestAnimationFrame(animate)
}
animate()