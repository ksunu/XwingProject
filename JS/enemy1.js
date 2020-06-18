//------ENEMY1 (1 LIVE)------

class TieFighter {
    constructor(ctx, canvasSize) {

        this.ctx = ctx
        this.canvasSize = canvasSize

        this.posX = Math.random() * (canvasSize - 100)
        this.posY = -100

        this.fighterW = 100
        this.fighterH = 100

        this.points = 10

        this.life = 1
        this.vel = 3

        this.image = new Image()
        this.image.src = './img/tie fighter/Tie Fighter.B09.shadowless.2k (1).png'
        this.enemyBull = []
        this.shoot()

    }

    // INTENTAR QUE NO SE SOLAPEN CUANDO SE HACEN SPAWN
    draw() {
        this.ctx.drawImage(this.image, this.posX, this.posY, this.fighterW, this.fighterH)
        this.move()
        this.enemyBull.forEach((elm) => elm.draw())
        this.clearBullets()
    }

    move() {
        this.posY += this.vel
    }

    shoot() {
        let playerShoot = new Audio('./sounds/fire/TIE fighter fire 1.mp3');
        playerShoot.play()
        playerShoot.volume = 0.1
        this.enemyBull.push(new EnemyBullets(this.ctx, this.posX, this.posY, this.fighterW, this.fighterH))
    }

    clearBullets() {
        this.enemyBull = this.enemyBull.filter(elm => elm.posY >= -1)
    }
}

class TieStriker extends TieFighter {
    constructor(ctx, canvasSize) {
        super(ctx, canvasSize)

        this.points = 30

        this.life = 3
        this.vel = 2

        this.image = new Image()
        this.image.src = './img/tie fighter/Tie Striker.B09.shadowless.2k.png'

        this.enemyBull = []
        this.shoot()

    }

    // INTENTAR QUE NO SE SOLAPEN CUANDO SE HACEN SPAWN
    draw() {
        this.ctx.drawImage(this.image, this.posX, this.posY, this.fighterW, this.fighterH)
        this.move()
        this.enemyBull.forEach((elm) => elm.draw())
        this.clearBullets()
    }

    move() {
        this.posY += this.vel
    }
    shoot() {
        // let playerShoot = new Audio('./sounds/fire/TIE fighter fire 1.mp3');
        // playerShoot.play()
        // playerShoot.volume = 0.1
        this.enemyBull.push(new EnemyBullets(this.ctx, this.posX, this.posY, this.fighterW, this.fighterH))
    }

    clearBullets() {
        this.enemyBull = this.enemyBull.filter(elm => elm.posY >= -1)
    }

}