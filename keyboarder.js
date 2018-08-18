const TICKS_PER_MOVE = 10



class Game {
  constructor() {
    this.canvas = document.getElementById('screen')
    this.context = this.canvas.getContext('2d')
    this.size = {x: this.canvas.width, y: this.canvas.height}

    this.player = new Player(this,{
    })    


    this.ticks = 0

    let tick = () => {
        this.update()
        this.draw()
        if (!this.gameOver) {
            window.requestAnimationFrame(tick)
        }
    }
    this.tick = tick
  }

  draw(){
    // console.log('drawing')
    this.context.fillRect(this.size.x/2-15, 450, 15, 15)
    this.player.draw
  }
  update() {
    this.player.update()
  }

  start(){
    this.tick()
  }
}




class Player {
  constructor(game) {
    this.center = {
        x:  this.size/ 2 - 10,
        y: 450
    }
    this.playerSize = {
        x: 20,
        y: 20
    }
    
    this.keyboarder = new Keyboarder()
    this.game = game
  }

  draw () {
    this.context.fillRect(this.center.x, this.center.y, this.playerSize.x,
      this.playerSize.y)
  }

update() {
  if
  (this.keyboarder.isDown(Keyboarder.KEYS.LEFT)) {
    this.center.x -= 2
    if (this.center.x <=0) this.center.x = 0
  }
 if (this.keyboarder.isDown(Keyboarder.KEYS.RIGHT)) {
            this.center.x += 2
            if (this.center.x >= 480) this.center.x = 480
        }
  }



}



class Keyboarder {
  constructor () {
    this.keyState = {}

    window.addEventListener('keydown', function (e) {
      this.keyState[e.keyCode] = true
    }.bind(this))

    window.addEventListener('keyup', function (e) {
      this.keyState[e.keyCode] = false
    }.bind(this))
  }

  isDown (keyCode) {
    return this.keyState[keyCode] === true
  }

  on (keyCode, callback) {
    window.addEventListener('keydown', function (e) {
      if (e.keyCode === keyCode) {
        callback()
      }
    })
  }
}

Keyboarder.KEYS = { LEFT: 37, RIGHT: 39, UP: 38, DOWN: 40, S: 83 }

let game = new Game()
game.start()
