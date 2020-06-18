class PlayerLife {

    constructor(ctx, canvasSize) {
        this.ctx = ctx
        this.canvasSize = canvasSize

        this.posX = 30
        this.posY = 70

        this.width = 40
        this.height = 40

        this.image = new Image()
        this.image.src = "./img/life/rebel.png"

    }

    draw() {
        // const lifeOne = this.ctx.drawImage(this.image, this.posX, this.posY, this.width, this.height)
        // const lifeTwo = this.ctx.drawImage(this.image, this.posX + 45, this.posY, this.width, this.height)
        // const lifeThree = this.ctx.drawImage(this.image, this.posX + 90, this.posY, this.width, this.height)
    }
}