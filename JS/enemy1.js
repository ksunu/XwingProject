//------ENEMY1 (1 LIVE)------

class TieFighter {
    constructor(ctx, canvasSize) {

        this.ctx = ctx
        this.canvasSize = canvasSize

        this.posX = Math.random() * ((innerWidth) - 100)
        this.posY = -100

        this.fighterW = 100;
        this.fighterH = 100;

        this.life = 1
        this.vel = 5

        this.image = new Image()
        this.image.src = './img/tie fighter/Tie Fighter.B09.shadowless.2k (1).png'

    }

    // INTENTAR QUE NO SE SOLAPEN CUANDO SE HACEN SPAWN
    draw() {
        this.ctx.drawImage(this.image, this.posX, this.posY, this.fighterW, this.fighterH)
        this.move()
    }

    move() {
        this.posY += this.vel
    }
}