class Player {
  constructor(id, controller,x,y) {
    this.id = id
    this.x = x
    this.y = y
    this.controller = controller
    this.init()
  }
  init(){
    this.controller.on('moveUp', (e)=>{ console.log('Player #',this.id, 'MOve up!'); })
    this.controller.on('moveDown', (e)=>{ console.log('Player #',this.id, 'MOve down!') })
  }
  setCtrl(ctrl){
    this.ctrl = ctrl
  }
}
