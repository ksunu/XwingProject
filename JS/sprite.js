class Helmet {
    constructor(ctx, canvasSize) {
        this.ctx = ctx
        this.canvasSize = canvasSize

        this.posX = 0
        this.posY = 0

        this.width = 50
        this.height = 500

        this.image = new Image()
        this.image.src = "./sprite/Stormtrooper.png"
        this.image.frames = 10
        this.image.framesIndex = 0

    }
    draw(framesCounter) {
        this.ctx.drawImage(
            this.image,
            this.image.framesIndex * Math.floor(this.image.width / this.image.frames),
            0,
            Math.floor(this.image.width / this.image.frames),
            this.image.width,
            this.posX,
            this.posY,
            this.width,
            this.height
        )

        this.animate(framesCounter)
    }

    animate(framesCounter) {
        if (framesCounter % 5 === 0) {
            this.image.framesIndex++
        }
        if (this.image.framseIndex > this.image.frames - 1) {
            this.image.framesIndex = 0
        }
    }

}