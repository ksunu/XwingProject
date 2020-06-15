//----timer----

class Timer {
    constructor(ctx, canvasSize) {
        this.ctx = ctx
        this.canvasSize = canvasSize

        this.posX = 30
        this.posY = canvasSize.h - 50

        this.setTimer()
    }
    draw(ctx, num) {

        this.ctx.beginPath()
        this.ctx.fillStyle = "white"
        this.ctx.font = "30px Arial"
        this.ctx.fillText(`Time: ${this.time} seconds`, this.posX, this.posY)


    }
    setTimer() {
        this.time = 120;
        const seconds = setInterval(() => {
            this.time--;
            if (this.time <= 0) {
                clearInterval(seconds);
                console.log("Time complete");
            }
        }, 1000)

    }

}