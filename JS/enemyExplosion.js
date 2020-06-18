class EnemyExplosion {
    constructor(ctx, fighterPosX, fighterPosY, canvasSize) {
        this.ctx = ctx
        this.canvasSize = canvasSize

        this.posX = 400
        this.posY = 400

        this.width = 100
        this.height = 100

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
            this.posX,
            this.posY,
            this.width,
            this.height
        )
        this.animate(framesCounter)
    }

    animate(framesCounter) {
        if (framesCounter % 15 == 0) {
            this.imageExplosion.framesIndex++
        }
        if (this.imageExplosion.framseIndex > this.imageExplosion.frames - 1) {
            this.imageExplosion.framesIndex = 0
        }
    }


}