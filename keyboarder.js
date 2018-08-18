

class Game {
  constructor() {
    this.canvas = document.getElementById('screen')
    this.context = this.canvas.getContext('2d')
    this.size = {x: this.canvas.width, y: this.canvas.height}

    this.player = new Player(this,{
      
    })    


    this.ticks = 0

    let tick = () => {
        this.ticks++
        this.update()
        this.draw()
        if (!this.gameOver) {
            window.requestAnimationFrame(tick)
        }
    }
    this.tick = tick
  }
  update() {
    console.log('updating')
  }
  draw(){
    console.log('drawing')
    this.context.fillRect(this.size.x/2-15, 450, 15, 15)
    this.player.draw
  }
  start(){
    this.tick()
  }
}




class Player {
  constructor (){

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
