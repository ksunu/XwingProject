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

}