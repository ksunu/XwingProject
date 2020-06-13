//------PLAYER CHA-------
class Player {

    constructor(ctx, canvasSize) {

        this.ctx = ctx
        this.canvasSize = canvasSize

        this.posX = this.canvasSize.w / 2 - 50
        this.posY = this.canvasSize.h - 150

        this.playerW = 100
        this.playerH = 100

        this.image = new Image()
        this.image.src = './img/pngwave.png'

        this.vel = 10

    }

    draw() {
        this.ctx.drawImage(this.image, this.posX, this.posY, this.playerW, this.playerH)
        this.move()
    }

    move(dir) {

        dir === 'left' ? this.posX -= this.vel : null
        dir === 'right' ? this.posX += this.vel : null

       
    }


}