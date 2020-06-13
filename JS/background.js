//------BACKGROUND-----

class Background {
    constructor(ctx, w, h, imgSource) {
        this.ctx = ctx

        this.width = w
        this.height = h

        this.image = new Image()
        this.image.src = imgSource

        this.posX = 0
        this.posY = 0

        // this.velY = 1
    }

    draw() {
        this.ctx.drawImage(this.image, this.posX, this.posY, this.width, this.height)
    }
};