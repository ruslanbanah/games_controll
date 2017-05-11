class Controll extends EventEmitter {
  constructor() {
    super();
    console.log('Controller start.', {this: this})
  }

  up(dy){
    this.emit('moveUp', { dy })
  }
  down(dy){
    this.emit('moveDown', { dy })
  }
  left(dx){
    this.emit('moveLeft', { dx })
  }
  right(dx){
    this.emit('moveRight', { dx })
  }
  shoot(vector){
    this.emit('shoot', { vector })
  }
}
