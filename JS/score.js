// ---SCORE BOARD---
class Score {
    constructor(ctx, canvasSize) {
        this.ctx = ctx
        this.canvasSize = canvasSize

        this.posX = 30
        this.posY = 40

        this.score0 = 0
    }
    draw() {
        this.ctx.beginPath()
        this.ctx.fillStyle = "white"
        this.ctx.font = "30px Arial"
        this.ctx.fillText(`Score: ${this.score0}`, this.posX, this.posY)
    }

}