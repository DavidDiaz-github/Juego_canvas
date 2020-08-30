class Submarine {
    constructor(ctx, submarinePosX, submarinePosY, submarineW, submarineH, canvasSize, subImage, frames) {
        this.ctx = ctx
        this.subPos = {
            x: submarinePosX,
            y: submarinePosY
        }
        this.subSize = {
            w: submarineW,
            h: submarineH
        }
        this.canvasSize = canvasSize
        this.subImage = subImage
        this.subImgInstance = undefined
        this.missiles = []
        
        this.frames = frames
        this.init()
        //this.shootSub('bomb.png')
    }

    init() {
        this.subImgInstance = new Image()
        this.subImgInstance.src = `images/${this.subImage}`
        //this.shootSub('bomb.png')
    }

    draw() {
        this.ctx.drawImage(this.subImgInstance, this.subPos.x, this.subPos.y, this.subSize.w, this.subSize.h)
        

        this.missiles.forEach(elm => elm.draw())
    }

    shootSub(frames) {
       //console.log("holaaaaaa")
        if (frames % 20 === 0) {
            this.missiles.push(new SubBullets(this.ctx,10,10))
            console.log("eeeeeee")
            console.log(this.missiles)
        }
        
    }
   

    clearMissiles() {   //Cambiar donde limpia
        this.missiles = this.missiles.filter(elm => elm.posY <= 0)
    }
}

class SubmarineBoss extends Submarine {
    constructor(ctx, submarineBossPosX, submarineBossPosY, submarineBossW, submarineBossH, canvasSize, frames) {
        super(ctx, canvasSize, frames)
        this.submarineBossPos = {
            x: submarineBossPosX,
            y: submarineBossPosY
        }
        this.submarineBossSize = {
            w: submarineBossW,
            h: submarineBossH
        }

        //this.imageName = subImage
        this.imageInstance = undefined
        this.missile = []
        this.init()

    }

    init() {
        this.imageInstance = new Image()
        this.imageInstance.src = `images/subBoss.png`
    }

    draw() {
        this.ctx.drawImage(this.imageInstance, this.submarineBossPos.x, this.submarineBossPos.y, this.submarineBossSize.w, this.submarineBossSize.h)
    }

    

}