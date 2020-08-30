class SubBullets {
    constructor(ctx,bulletSizeW, bulletSizeH) {

        this.ctx = ctx
        this.subSize = {
            w: 100,
            h: 200
        }

        this.bulletSize = {
            w: bulletSizeW,
            h: bulletSizeH
        }

        this.subPos = {
            x: 100,
            y: 580
        }

        this.bulletPos = {
            x: 100,
            y: 580
        }

        //this.imageName = imageName
        this.imageInstance = undefined

        this.velBullet = {
            x: 0,
            y: 15
        }

        this.init()
    }

    init() {
        this.imageInstance = new Image()
        this.imageInstance.src = `images/bomb.png`
    }

    draw() {
        this.ctx.drawImage(this.imageInstance,this.bulletSize.w, this.bulletSize.h)
        this.move()
    }

    move() {
        this.bulletPos.y += this.velBullet.y
            //console.log(this.bulletPos.y)
    }
}