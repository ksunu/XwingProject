// -------GAME SPECS-------
const Game = {
    title: 'X Wing Project',
    author: 'Soon Woo Kwon, Roberto Gonzalez Camejo',
    licence: null,
    version: '1.0.0',
    canvasDom: undefined,
    ctx: undefined,
    background: undefined,
    player: undefined,
    // enemyExplosion: [],
    item: [],
    tieFighter: [],
    score: 0,
    playerLife: 3,
    canvasSize: {
        w: window.innerWidth,
        h: window.innerHeight
    },
    FPS: 60,
    framesCounter: 0,

    // ---GAME INIT---
    init() {
        this.canvasDom = document.getElementById("myCanvas")
        this.ctx = this.canvasDom.getContext('2d')
        this.setDimentions()
        this.start()
    },

    // ---GAME DIMS---
    setDimentions() {
        this.canvasSize.w = window.innerWidth
        this.canvasSize.h = window.innerHeight
        this.canvasDom.setAttribute('width', this.canvasSize.w)
        this.canvasDom.setAttribute('height', this.canvasSize.h)
    },

    // ---GAME Start---
    start() {
        let backgrounBattle = new Audio('/sounds/background/10 The Battle Of Yavin.mp3');
        backgrounBattle.play()
        backgrounBattle.volume = 0.1
        this.reset()
        this.interval = setInterval(() => {
            this.clear()
            this.drawAll(this.framesCounter)

            this.generateEnemy()
            this.clearEnemy()
            this.isCollision()

            this.generateItem()
            this.clearItem()
            this.isItemCollision()

            // this.generateEnemyExplosion()
            // this.explosionClear()

            this.framesCounter > 5000 ? this.framesCounter = 0 : this.framesCounter++

            this.isHit()
            this.takeDamage()

            this.endGame()
        }, 1000 / this.FPS);
    },

    // ---GAME RESET---
    reset() {
        this.background = new Background(this.ctx, this.canvasSize.w, this.canvasSize.h)
        this.player = new Player(this.ctx, this.canvasSize)
        this.timer = new Timer(this.ctx, this.canvasSize)
        this.score = new Score(this.ctx, this.canvasSize)
        this.tieFighter = []
        this.playerLife = new PlayerLife(this.ctx, this.canvasSize)
        this.item = []
        // this.enemyExplosion = []
    },

    // ---GAME DRAW ALL---
    drawAll() {
        this.background.draw()
        this.player.draw()

        this.tieFighter.forEach(elm => elm.draw())
        // this.enemyExplosion.forEach(elm => elm.draw(this.framesCounter))
        // console.log('traza', 'drawAll', this.enemyExplosion)

        this.timer.draw()

        this.score.draw()

        this.playerLife.draw()
        this.item.forEach(elm => elm.draw());

    },

    // ---GAME CLEAR---
    clear() {
        this.ctx.clearRect(0, 0, this.width, this.height)
    },

    // ---GAME GENERATE LIFE ITEM---
    generateItem() {
        this.framesCounter % Math.floor(150 + (Math.random() * 10)) === 0 &&
            this.item.push(new Item(this.ctx, this.canvasSize.w, this.canvasSize.h))

    },

    // ---GAME CLEAR ITEM---
    clearItem() {
        this.item = this.item.filter(elm => elm.posY <= this.canvasSize.h)
    },

    isItemCollision() {
        this.item.some(elm => {
            if (
                (elm.posY < this.player.posY + this.player.playerH) &&
                (elm.posY + elm.height > this.player.posY) &&
                (elm.posX < this.player.posX + this.player.playerW + 40) &&
                (elm.posX + elm.width > this.player.posX)
            ) {
                elm.posY = this.canvasSize - 1
                this.player.life += 1
            }
        })
    },


    // ---GAME GENERATE ENEMY---
    generateEnemy() {
        if (this.framesCounter % Math.floor(150 + (Math.random() * 10)) === 0) {
            this.tieFighter.push(new TieFighter(this.ctx, this.canvasSize.w, this.canvasSize.h))
            this.tieFighter.push(new TieStriker(this.ctx, this.canvasSize.w, this.canvasSize.h))
            let tieEngine = new Audio('/sounds/fire/TIE fighter flyby 1.mp3');
            tieEngine.play()
            tieEngine.volume = 0.1
            tieEngine.duration = 1
        }
    },

    // ---GAME CLEAR ENEMY---
    clearEnemy() {
        this.tieFighter = this.tieFighter.filter(elm => elm.posY <= this.canvasSize.h)
    },

    // ---GAME ENEMY SHOOT---
    enemyShoot() {
        this.framesCounter % Math.floor(400 + (Math.random() * 10)) === 0 && this.tieFighter.shoot()
    },

    // ---GAME IS COLLISION---
    isCollision() {
        this.tieFighter.some(elm => {
            if (
                (this.player.posX < elm.posX + elm.fighterW - 20) && //por la derecha
                (this.player.posX + this.player.playerW > elm.posX + 20) && //por la izquierda
                (this.player.posY < elm.posY + elm.fighterH - 30) && // por abajo
                (this.player.posY + this.player.playerH > elm.posY + 30) // por arriba
            ) {
                elm.posY = this.canvasSize - 1
                this.player.life -= 1
            }
        })
    },

    // ---GAME IS HIT PLAYER BULLETS---
    isHit() {
        this.tieFighter.some(tie => {
            this.player.bullets.forEach(elm => {
                if (
                    (elm.posX < tie.posX + tie.fighterW + 40) &&
                    (elm.posX + elm.width > tie.posX) &&
                    (elm.posY < tie.posY + tie.fighterH) &&
                    (elm.height + elm.posY > tie.posY)) {
                    tie.life--
                    this.destroyTie()
                    elm.posY = this.canvasSize - 1
                }
            })
        })
    },

    // generateEnemyExplosion() {
    //     this.enemyExplosion.push(new EnemyExplosion(this.ctx, this.fighterPosX, this.fighterPosY, this.width, this.height))
    //     console.log('traza', 'generate', this.enemyExplosion)
    // },

    // explosionClear() {
    //     this.enemyExplosion = this.enemyExplosion.filter(elm => elm.posY <= this.canvasSize.h)
    // },

    // ---GAME DESTROY TIE---
    destroyTie() {
        this.tieFighter.forEach(tie => {
            if (tie.life === 0) {
                tie.posY = this.canvasSize.h - 1
                this.score.score0 += tie.points
                let tieExplosion = new Audio('/sounds/explode/TIE fighter explode.mp3');
                tieExplosion.play()
                tieExplosion.volume = 0.09
                tieExplosion.duration = 1
                //******************************SET TIME OUT********/

            }
        })
        // this.generateEnemyExplosion(this.ctx, this.PosX, this.PosY)
        // console.log(this.generateEnemyExplosion)
        // console.log(this.enemyExplosion)
    },

    // ---GAME PLAYER TAKE DAMAGE---
    takeDamage() {
        this.tieFighter.forEach(tie => {
            tie.enemyBull.forEach(elm => {
                if (
                    (elm.posY < this.player.posY + this.player.playerH) &&
                    (elm.posY + elm.height > this.player.posY) &&
                    (elm.posX < this.player.posX + this.player.playerW + 40) &&
                    (elm.posX + elm.width > this.player.posX)

                ) {
                    elm.posY = this.canvasSize - 1
                    this.player.life -= 1
                }
            })
        })
    },

    // ---GAME END---
    endGame() {
        setTimeout((() => {
            if (this.timer.time === 0) {
                clearInterval(this.interval)
                window.open("./goodEnding.html", "_self")
            }
            if (this.player.life === 0) {
                clearInterval(this.interval)
                window.open("./badEnding.html", "_self")
            }
        }), 3000 / this.FPS)


        this.player.isDestroyed()
    },

};