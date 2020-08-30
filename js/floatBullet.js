class BulletFloat {
    constructor(ctx, floatSizeW, floatSizeH, bulletsizeW, bulletSizeH, floatPosX, floatPosY) { ///, floatPosX, floatPosY
        this.ctx = ctx
        this.bulletPos = {        // si la bala no sale del medio del barco siempre hay que añadir la posicion del barco.
            x: floatPosX + floatSizeW / 2,
            y: floatPosY + floatSizeH
        }
        //this.bullets = []
        this.bulletSize = {
            w: bulletsizeW,
            h: bulletSizeH
        }
        //this.imageName = imageName2
        this.imageInstance = undefined

        this.velBullet = {
            x: 0,
            y: 25
        }
        
        this.init()
    }

    init() {
        this.imageInstance = new Image()
        this.imageInstance.src = `images/bomb.png`
    }

    draw() {
        this.ctx.drawImage(this.imageInstance, this.bulletPos.x, this.bulletPos.y, this.bulletSize.w, this.bulletSize.h)

        this.move()
    }

    move() {
        this.bulletPos.y += this.velBullet.y
        //console.log(this.bulletPos.y)
    }

    
}