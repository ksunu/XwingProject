class EnemyBullets {
    constructor(ctx, fighterPosX, fighterPosY, fighterW, fighterH) {
        this.ctx = ctx

        this.posX = fighterPosX + fighterW / 2
        this.posY = fighterPosY + fighterH

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
    hitplayer(){
        this.some(elm =>{
            if(this.player.posY + this.player.playerH > elm.posY){
                player.life -= 1
            } }
            )
    }
}
