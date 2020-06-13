class Bullets {
    constructor(ctx, playerPosX, playerPosY, playerPosX0, playerPosY0, playerWidth, playerHeight) {
        this.ctx = ctx

        this.posX = playerPosX + playerWidth / 2
        this.posY = playerPosY + playerHeight

        this.playerPosX0 = playerPosX0
        this.playerPosY0 = playerPosY0

        this.playerWidth = playerWidth
        this.playerHeight = playerHeight

        this.width = 20
        this.height = 30

        this.vel = 15

        this.image = new Image()
        this.image.src = "./img/bullet/laser-sprite-png-6-transparent.png"

    }

    draw() {
        this.ctx.drawImage(this.image, this.posX, this.posY, this.width, this.height)
        this.move()
    }

    move() {
        this.posY += this.vel
    }
    
}