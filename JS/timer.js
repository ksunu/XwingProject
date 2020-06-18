//----timer----

class Timer {
    constructor(ctx, canvasSize) {
        this.ctx = ctx
        this.canvasSize = canvasSize

        this.posX = canvasSize.w - 280
        this.posY = 40

        this.setTimer()
    }
    draw() {

        this.ctx.beginPath()
        this.ctx.fillStyle = "white"
        this.ctx.font = "30px Arial"
        this.ctx.fillText(`Time: ${this.time} seconds`, this.posX, this.posY)


    }
    setTimer() {
        this.time = 90;
        const seconds = setInterval(() => {
            this.time--;
            this.time <= 0 && clearInterval(seconds)
        }, 1000)

    }

}