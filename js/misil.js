class Misil {
    constructor(ctx, misilSizeW, misilSizeH, imageName) {

        this.ctx = ctx
        this.misilPos = {
            x: 100,
            y: 400
        }

        this.misilSize = {
            w: misilSizeW,
            h: misilSizeH
        }

        this.imageName = imageName
        this.imageInstance = undefined

        this.init()


    }

    init() {
        this.imageInstance = new Image()
        this.imageInstance.src = `images/${this.imageName}`
    }

    draw() {
        this.ctx.drawImage(this.imageInstance,  this.misilSize.w, this.misilSize.h,)
    }
}