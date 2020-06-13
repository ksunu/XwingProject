// -------GAME SPECS-------
const Game = {
    title: 'X Wing Project',
    author: 'Soon Woo Kwon, Roberto Gonzalez Camejo',
    licence: null,
    version: '1.0.0',
    canvasDom: undefined,
    ctx: undefined,
    background: undefined,
    canvasSize: {
        w: window.innerWidth,
        h: window.innerHeight
    },

    keys: {
        LEFT: 37,
        RIGTH: 39,
        // UP: 38,
        // DOWN: 40,
        SPACE: 32,
        // ENTER: 13,
    },

    init() {
        this.canvasDom = document.getElementById("myCanvas")
        this.ctx = this.canvasDom.getContext('2d')
        this.setDimentions()

        this.start()
    },

    setDimentions() {
        this.canvasSize.w = window.innerWidth
        this.canvasSize.h = window.innerHeight
        // this.canvasDom = this.canvasSize.w
        // this.canvasDom = this.canvasSize.h
        this.canvasDom.setAttribute('width', this.canvasSize.w)
        this.canvasDom.setAttribute('height', this.canvasSize.h)
    },

    start() {
        this.reset()
        this.drawAll()
    },

    reset() {
        this.background = new Background(this.ctx, this.canvasSize.w, this.canvasSize.h, "./img/Death_Star/justin-wasilenko-death-star-game-mat-92cmx184cm.jpg")
        this.player = new Player(this.ctx, this.width, this.height, "./img/pngwave.png")

    },


    drawAll() {
        this.background.draw()
        this.player.draw()
    },

    // setEventListeners() {
    //     // document.onkeydown = e => {
    //     //     e.keyCode === this.keys.LEFT ? 
    //     //     e.keyCode === this.keys.RIGTH ? 
    //     //     e.keyCode === this.keys.UP ? 
    //     //     e.keyCode === this.keys.DOWN ? 
    //     //     e.keyCode === this.keys.SPACE ? 
    //     //     e.keyCode === this.keys.ENTER ? 
    //     // }
    // }

};