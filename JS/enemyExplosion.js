class EnemyExplosion {
    constructor(ctx, fighterPosX, fighterPosY, fighterW, fighterH) {
        this.ctx = ctx

        this.posX = 0
        this.posY = 0

        this.width = 100
        this.height = 100

        this.vel = 0.1

        this.imageExplosion = new Image()
        this.imageExplosion.src = "./img/explosion/mejorado.png"
        this.imageExplosion.frames = 10
        this.imageExplosion.framesIndex = 0

    }

    draw(framesCounter) {
        this.ctx.drawImage(
            this.imageExplosion,
            this.imageExplosion.framesIndex * Math.floor(this.imageExplosion.width / this.imageExplosion.frames),
            0,
            Math.floor(this.imageExplosion.width / this.imageExplosion.frames),
            this.imageExplosion.height,
            this.fighterPosX,
            this.fighterPosY,
            this.width,
            this.height
        )
        this.animate(framesCounter)
    }

    animate(framesCounter) {
        if (framesCounter % 20 == 0) {
            this.imageExplosion.framesIndex++
        }
        if (this.imageExplosion.framseIndex > this.imageExplosion.frames - 1) {
            this.imageExplosion.framesIndex = 0
        }
    }

    move() {
        this.posY += this.vel
    }


}