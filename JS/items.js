//-----LIVE ITEM (1 LIVE UP)-----;
class Item {
    constructor(ctx, canvasSize) {

        this.ctx = ctx
        this.canvasSize = canvasSize

        this.posX = Math.random() * (canvasSize - 100)
        this.posY = -40

        this.width = 40
        this.height = 40

        this.vel = 3

        this.image = new Image()
        this.image.src = "./img/life/rebel.png"

    }
    draw() {
        this.ctx.drawImage(this.image, this.posX, this.posY, this.width, this.height)
        this.move()
    }

    move() {
        this.posY += this.vel
    }
}