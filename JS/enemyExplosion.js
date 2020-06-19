class EnemyExplosion {
    constructor(ctx, fighterPosX, fighterPosY) {
        this.ctx = ctx

        this.posX = fighterPosX
        this.posY = fighterPosY

        this.width = 100
        this.height = 100

        this.image = new Image()
        this.image.src = "./img/explosion/mejorado.png"
        this.image.frames = 10
        this.image.framesIndex = 0

    }

    draw(framesCounter) {
        this.ctx.drawImage(
            this.image,
            this.image.framesIndex * Math.floor(this.image.width / this.image.frames),
            0,
            Math.floor(this.image.width / this.image.frames),
            this.image.height,
            this.posX,
            this.posY,
            this.width,
            this.height
        )
        this.animate(framesCounter)
    }

    animate(framesCounter) {
        if (framesCounter % 8 == 0) {
            this.image.framesIndex++
        }
        if (this.image.framseIndex > this.image.frames - 1) {
            this.image.framesIndex = 0
        }
    }
}