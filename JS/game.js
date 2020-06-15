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
    tieFighter: [],
    score: 0,
    canvasSize: {
        w: window.innerWidth,
        h: window.innerHeight
    },
    FPS: 60,
    framesCounter: 0,



    init() {
        this.canvasDom = document.getElementById("myCanvas")
        this.ctx = this.canvasDom.getContext('2d')
        this.setDimentions()
        this.start()
    },

    setDimentions() {
        this.canvasSize.w = window.innerWidth
        this.canvasSize.h = window.innerHeight
        this.canvasDom.setAttribute('width', this.canvasSize.w)
        this.canvasDom.setAttribute('height', this.canvasSize.h)
    },

    start() {
        this.reset()
        this.interval = setInterval(() => {
            this.clear()
            this.drawAll()

            this.generateEnemy()
            this.clearEnemy()

            this.framesCounter > 5000 ? this.framesCounter = 0 : this.framesCounter++
            this.isCollision()
            this.isHit()
            this.gameOver()
            this.endGame()

        }, 40);
    },

    reset() {
        this.background = new Background(this.ctx, this.canvasSize.w, this.canvasSize.h)
        this.player = new Player(this.ctx, this.canvasSize)
        this.timer = new Timer(this.ctx, this.canvasSize)
        this.score = new Score(this.ctx, this.canvasSize)
        this.tieFighter = []

    },

    drawAll() {
        this.background.draw()
        this.player.draw()

        this.tieFighter.forEach(elm => elm.draw())
        this.timer.draw()
        this.score.draw()



    },



    clear() {
        this.ctx.clearRect(0, 0, this.width, this.height)
    },

    generateEnemy() {
        if (this.framesCounter % Math.floor(50 + (Math.random() * 10)) === 0) {
            this.tieFighter.push(new TieFighter(this.ctx, this.canvasSize.w, this.canvasSize.h))
            // let tieEngine = new Audio('/sounds/fire/TIE fighter flyby 1.mp3');
            // tieEngine.play()
            // tieEngine.volume = 0.1
            // tieEngine.duration = 1
        }
    },

    clearEnemy() {
        this.tieFighter = this.tieFighter.filter(elm => elm.posY <= this.canvasSize.h)

    },

    isCollision() {
        this.tieFighter.some(elm => {
            if (
                (this.player.posX < elm.posX + elm.fighterW - 20) && //por la derecha
                (this.player.posX + this.player.playerW > elm.posX + 20) && //por la izquierda
                (this.player.posY < elm.posY + elm.fighterH - 30) && // por abajo
                (this.player.posY + this.player.playerH > elm.posY + 30)) // por arriba
            {
                elm.posY = this.canvasSize - 1
                this.player.life -= 1
                console.log('traza', "Collision")
                console.log(this.player.life)
            }
        })
    },

    isHit() {
        this.tieFighter.some(tie => {
            this.player.bullets.forEach(elm => {
                if (
                    (elm.posX < tie.posX + tie.fighterW) &&
                    (elm.posX + elm.width > tie.posX) &&
                    (elm.posY < tie.posY + tie.fighterH) &&
                    (elm.height + elm.posY > tie.posY)) {
                    console.log('traza', 'boom')
                    tie.life--
                    this.destroyTie()
                    elm.posY = this.canvasSize - 1

                }
            })
        })
    },

    destroyTie() {
        this.tieFighter.forEach(tie => {
            console.log('traza', 'tile.life', tie.life)
            if (tie.life === 0) {
                tie.posY = this.canvasSize.h - 1
                this.score.score0 += 10
                console.log('   traza', 'life', tie.life)
                let tieExplosion = new Audio('/sounds/explode/TIE fighter explode.mp3');
                tieExplosion.play()
                tieExplosion.volume = 0.2
                tieExplosion.duration = 1
            }
        })
    },
    endGame() {
        if (this.timer.time === 0) {
            clearInterval(this.interval)

        }
    },
    gameOver() {
        if (this.player.life === 0) {
            clearInterval(this.interval)
            let xWingExplosion = new Audio('/sounds/explode/XWing explode.mp3')
            xWingExplosion.play()
            xWingExplosion.volume = 0.5
            xWingExplosion.duration = 1
        }
    }


};