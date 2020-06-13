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
    canvasSize: {
        w: window.innerWidth,
        h: window.innerHeight
    },

    keys: {
        LEFT: 37,
        RIGHT: 39,
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
        this.canvasDom.setAttribute('width', this.canvasSize.w)
        this.canvasDom.setAttribute('height', this.canvasSize.h)
    },

    start() {
        this.reset()
        this.setEventListeners()
        this.interval = setInterval(() => {
            this.clear()
            this.drawAll()
        }, 20);
    },

    reset() {
        this.background = new Background(this.ctx, this.canvasSize.w, this.canvasSize.h, "./img/Death_Star/justin-wasilenko-death-star-game-mat-92cmx184cm.jpg")
        this.player = new Player(this.ctx, this.canvasSize)

    },

    drawAll() {
        this.background.draw()

        this.player.draw()
    },

    setEventListeners() {

        document.onkeydown = e => {
            e.keyCode === this.keys.LEFT && this.player.move('left')
            e.keyCode === this.keys.RIGHT && this.player.move('right')

        }
    },

    clear() {

        this.ctx.clearRect(0, 0, this.width, this.height)
        console.log('traza', 'clear', this.canvasSize.w, this.canvasSize.h)
    },


};