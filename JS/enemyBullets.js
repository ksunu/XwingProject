// ---ENEMY SHOOT
class EnemyBullets {
    constructor(ctx, fighterPosX, fighterPosY, fighterW, fighterH) {
        this.ctx = ctx

        this.posX = fighterPosX + fighterW / 2
        this.posY = fighterPosY + fighterH

        this.width = 10
        this.height = 30

        this.vel = 6

        this.image = new Image()
        this.image.src = "./img/bullet/enemyBullet.png"

    }

    draw() {
        this.ctx.drawImage(this.image, this.posX, this.posY, this.width, this.height)
        this.move()
    }

    move() {
        this.posY += this.vel
    }

}