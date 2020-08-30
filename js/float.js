

class Float {
    constructor(ctx, posX, posY, floatW, floatH, canvasSize, imageName) { 
        this.ctx = ctx
        this.floatPos = {
            x: posX,
            y : posY
        }
        this.floatSize = {
            w: floatW,
            h : floatH
        }
        this.canvasSize = canvasSize
        this.imageName = imageName
        this.imageInstance = undefined
        this.bullets = [];
        
        this.init()
    }

    init() {
        this.imageInstance = new Image()
        this.imageInstance.src = `images/${this.imageName}`
    }

    draw() {
        this.ctx.drawImage(this.imageInstance, this.floatPos.x, this.floatPos.y, this.floatSize.w, this.floatSize.h)

        this.bullets.forEach(bullet => bullet.draw())

    }

    move(dir) {        //Comprobar que el barco se mueve sin salirse de la pantalla.
        if (this.floatPos.x >= 0 && this.floatPos.x <= this.canvasSize.w - this.floatSize.w) {
            dir === 'left' ? this.floatPos.x -= 25 : null
            dir === 'right' ? this.floatPos.x += 25 : null
        } else  if (this.floatPos.x <= 0){
            this.floatPos.x *= -1
        } else if (this.floatPos.x >= this.canvasSize.w - this.floatSize.w) {
            this.floatPos.x += -10
        }
    }

    shoot(event) {
        if (event === 'shoot') {
            this.bullets.push(new BulletFloat(this.ctx, 200, 100,50,50,this.floatPos.x,this.floatPos.y))

            //console.log("estoy en shoot event de float")
            //console.log(this.bullets)


        }
        
        
    }

    clearBullets() {
        this.bullets = this.bullets.filter(bull => bull.bulletPos.y <= this.canvasSize.h)
    }
    
    

}