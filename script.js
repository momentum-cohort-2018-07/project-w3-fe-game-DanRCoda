const TICKS_PER_MOVE = 10



class Game {
  constructor() {
    this.canvas = document.getElementById('screen')
    this.context = this.canvas.getContext('2d')
    this.size = {
      x: this.canvas.width,
      y: this.canvas.height
    }

    this.player = new Player(this)
    this.tick()
  }

  // tick() {
  //     this.update()
  //     this.draw()
  //     requestAnimationFrame(() => this.tick())

  // }
  // this.tick = tick


  draw() {
    // console.log('drawing')
    this.context.fillRect(250, 450, 20, 20)
    this.player.draw()
  }

  tick() {
    this.update()
    this.draw()
    requestAnimationFrame(() => this.tick())

  }
  update() {
    this.player.update()

  }


  start() {
    this.tick()
  }
}


class Player {
  constructor(game) {
    this.center = {
      x: this.size / 2 - 10,
      y: 450
    }
    this.playerSize = {
      x: 20,
      y: 20
    }

    this.keyboarder = new Keyboarder()
    this.game = game
  }

  draw() {
    this.game.context.fillRect(this.center.x, this.center.y, this.playerSize.x,
      this.playerSize.y)
  }

  update() {
    if (this.keyboarder.isDown(Keyboarder.KEYS.LEFT)) {
      this.center.x -= 2
      if (this.center.x <= 0) this.center.x = 0
    }
    if (this.keyboarder.isDown(Keyboarder.KEYS.RIGHT)) {
      this.center.x += 2
      if (this.center.x >= 480) this.center.x = 480
    }
  }
}

let game = new Game()
// game.start()