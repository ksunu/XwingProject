// ------PLAYER CHARACTER-------
class Player {
    constructor(ctx, canvasSize) {
        this.ctx = ctx;
        this.canvasSize = canvasSize

        this.posX = this.canvasSize.w / 2 - 50;
        this.posY = this.canvasSize.h - 150;

        this.playerW = 150;
        this.playerH = 150;

        this.image = new Image();
        this.image.src = "./img/Luke's X-Wing left (4).png";
        this.image.frames = 3
        this.image.framesIndex = 1

        this.vel = 20;
        this.life = 3

        this.keys = {
            LEFT: 37,
            RIGHT: 39,
            UP: 38,
            DOWN: 40,
            SPACE: 32,
        };

        this.bullets = [];

    }

    // ---PLAYER DRAW---
    draw(framesCounter) {
        this.setEventListeners()

        this.bullets.forEach((elm) => elm.draw())

        this.clearBullets()

        this.ctx.drawImage(
            this.image,
            this.image.framesIndex * Math.floor(this.image.width / this.image.frames),
            0,
            Math.floor(this.image.width / this.image.frames),
            this.image.height,
            this.posX,
            this.posY,
            this.playerW,
            this.playerH
        )

        // this.animate(framesCounter)

        this.move()

        this.drawLives()

        this.isDestroyed()
    }

    // ---PLAYER DRAW LIVES---
    drawLives() {
        this.ctx.beginPath()
        this.ctx.fillStyle = "lightgreen"
        this.ctx.font = "30px Arial"
        this.ctx.fillText(`Hull Integrity: ${this.life}`, 30, 75)
    }

    // ---PLAYER SMOOTH MOVE---

    smoothMovement() {
        this.posX += this.speedX
        this.posY += this.speedY
    }

    // ---PLAYER MOVE---
    move(dir) { 
        switch (dir) {
            case "left":
                if (this.posX >= 30) {
                    this.posX -= this.vel;
                    this.image.framesIndex = 0
                }
                break;
            case "right":
                if (this.posX + 100 <= this.canvasSize.w - 30) {
                    this.posX += this.vel;
                    this.image.framesIndex = 2
                }
                break;
            case "up":
                if (this.posY >= 30) {
                    this.posY -= this.vel;
                }
                break;
            case "down":
                if (this.posY + 100 <= this.canvasSize.h - 30) {
                    this.posY += this.vel;
                }
                break;
            case "shoot":
                if ("shoot" === true) {}
        }
    }

    // ---PLAYER SHOOT---
    shoot() {
        let playerShoot = new Audio('./sounds/fire/XWing fire.mp3');
        playerShoot.play()
        playerShoot.volume = 0.1
        this.bullets.push(new Bullets(this.ctx, this.posX, this.posY, this.playerW, this.playerH))
    }

    // ---PLAYER BULLETS CLEAR---
    clearBullets() {
        this.bullets = this.bullets.filter(elm => elm.posY >= -1)
    }

    // ---PLAYER EVENT LISTENERS---
    setEventListeners() {
        document.onkeydown = (e) => {
            e.preventDefault() 
            e.keyCode === this.keys.LEFT && this.move("left");
            e.keyCode === this.keys.RIGHT && this.move("right");
            e.keyCode === this.keys.UP && this.move("up");
            e.keyCode === this.keys.DOWN && this.move("down");
            e.keyCode === this.keys.SPACE && this.shoot("shoot");
        };
        document.onkeyup = (e) => {
            this.image.framesIndex = 1
        }
    }

    // ---PLAYER IS DESTROYED---
    isDestroyed() {
        if ( this.life === 0) {
            let xWingExplosion = new Audio('/sounds/explode/XWing explode.mp3')
            xWingExplosion.play()
            xWingExplosion.volume = 0.3
        }
    }

}