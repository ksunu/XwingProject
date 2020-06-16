class Bullets { //intervalos de disparo. 
    constructor(ctx, playerPosX, playerPosY, playerWidth, playerHeight) {
        this.ctx = ctx

        this.posX = playerPosX + playerWidth / 2 - 10
        this.posY = playerPosY

        // this.playerPosX0 = playerPosX0
        // this.playerPosY0 = playerPosY0

        this.playerWidth = playerWidth
        this.playerHeight = playerHeight

        this.width = 20
        this.height = 30

        this.vel = 6

        this.image = new Image()
        this.image.src = "./img/bullet/laser-sprite-png-6-transparent.png"

    }

    draw() {
        this.ctx.drawImage(this.image, this.posX + 40, this.posY, this.width, this.height)
        this.ctx.drawImage(this.image, this.posX - 40, this.posY, this.width, this.height)
        this.move()
    }

    move() {
        this.posY -= this.vel
    }

}
class EnemyBullets extends Bullets {
    constructor(ctx) {
        super()
        this.ctx = ctx

        this.width = 20
        this.height = 30

        this.vel = 6

        this.image = new Image()
        this.image.src = "./img/bullet/blue-laser-png-transparent.png"

    }

    draw() {
        this.ctx.drawImage(this.image, this.posX, this.posY, this.width, this.height)
        this.move()
    }

    move() {
        this.posY += this.vel
    }

}