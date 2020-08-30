const floatApp = {
    name: "Canvas Float Game",
    author: "Heyling Marquez y  David Diaz",
    version: '1.0.0',
    license: undefined,
    description: "Game Float vs submarines Canvas",
    canvasId: undefined,
    ctx: undefined,
    float: undefined,
    bulletFloat: undefined,
    submarine: undefined,
    submarine2: undefined,
    submarineBoss: undefined,
    missiles: [],
    score: 0,
    frames: 0,
    obstaclesDensity: 20,
    bullets: [],
    canvasSize: {
        w: undefined,
        h: undefined
    },
    canvasPos: {  // canvasEjes!!!!
        x: undefined,
        y: undefined
    },

    init(id) {
        this.canvasId = id;
        this.canvas = document.getElementById(id);
        this.ctx = this.canvas.getContext('2d');
        this.setDimensions()
        //this.setEventHandler()
        this.setEventListener()
        this.drawFloat('barco2.png')
        //this.drawMissile('bomb.png')
        this.drawSubmarine('submarine.png')
        this.drawSubmarine2('submarine.png')
        this.drawSubBoss()
        this.drawAll()
    },

    setDimensions() {
        document.getElementById(this.canvasId).setAttribute('width', window.innerWidth)
        document.getElementById(this.canvasId).setAttribute('height', window.innerHeight)
        this.canvasSize = {
            w: window.innerWidth,
            h: window.innerHeight
            
        }
  
    },

    // setEventHandler() {
    //     window.onresize = () => this.setDimensions()
    // },

    drawFloat(imageName) {
        this.float = new Float(this.ctx, this.canvasSize.w / 2 - 200, this.canvasSize.h / 2 - 350, 200, 100, this.canvasSize, imageName )
    },

    drawSubmarine(subImage) {
        this.submarine = new Submarine(this.ctx, this.canvasSize.w / 2 - 500, this.canvasSize.h - 450, 100, 100, this.canvasSize, subImage, this.frames)
        console.log(this.submarine)
    },

    drawSubmarine2(subImage) {
        this.submarine2 = new Submarine(this.ctx, this.canvasSize.w /2 + 400, this.canvasSize.h - 350, 100, 100, this.canvasSize, subImage, this.frames)

    },

    drawSubBoss() {
        this.submarineBoss = new SubmarineBoss(this.ctx, this.canvasSize.w / 2 - 100, this.canvasSize.h - 150, 150, 150, this.canvasSize, this.frames)
    },



    // drawSubmarine(subImage) {
    //     const submarine = new Submarine(this.ctx, 100, 580, 100, 200, this.canvasSize, subImage,this.frames)
    //     const submarine2 = new Submarine(this.ctx, 700, 580, 100, 200, this.canvasSize, subImage,this.frames)

    //     const submarines = [submarine, submarine2]
    //     this.submarine = submarines.forEach(elm => elm.draw())
        
    // },

    

    // drawMissile(imageName) {
    //     //this.missile = new SubBullets(this.ctx, 100, 100, 100, 580, imageName)
    //     if (this.frames % 20 === 0) {
    //             const missile1 = new SubBullets(this.ctx, 100, 200, 100, 580, imageName)
    //             const missile2 = new SubBullets(this.ctx, 100, 200, 700, 580, imageName)

    //             const misiles = [missile1, missile2]
    //         this.missiles = misiles.forEach(elm => elm.draw())
            
    //     }

    //     // this.missiles.push(this.missile)
    //     // this.missiles.forEach(elm => elm.draw())
    // },

    
    setEventListener() {
        document.onkeydown = e => {
            e.keyCode === 37 ? this.float.move('left') : null
            e.keyCode === 39 ? this.float.move('right') : null
            e.keyCode === 32 ? this.float.shoot('shoot') : null
        }
    },

    drawAll() {
        setInterval(() => {
            this.frames > 5000 ? this.frames = 0 : this.frames++
            this.clearScreen()
            this.float.draw()
            this.float.clearBullets()
            this.submarine.draw()
            this.submarine2.draw()
            this.submarineBoss.draw()
            //this.submarine.shootSub(this.frames)
            //this.submarine.clearMissiles()



            //this.missile.draw()
            // this.drawMissile('bomb.png')
       
            // this.drawSubmarine('submarine.png')


            
        }, 100);
        
    },


    clearScreen() {
        this.ctx.clearRect(0, 0, this.canvasSize.w, this.canvasSize.h)
    }
    

    


}