//------PLAYER CHA-------
class Player {

    constructor(ctx, playerW, playerH, imgSource) {
        this.ctx = ctx

        this.playerW = playerW
        this.playerH = playerH

        this.width = 50
        this.height = 50

        this.image = new Image()
        this.image.src = imgSource

        this.posX = 0
        this.posY = 0
    }

    draw() {
        this.image.onload = () => {
            this.ctx.drawImage(this.image, this.posX, this.posY, this.width, this.height)
        }
    }


}