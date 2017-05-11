class KeyboardControll extends Controll {
  constructor(panel) {
    super();
    this.setEvents(panel)
  }
  setEvents(panel){
    panel.querySelector('#moveUp').addEventListener('click', ()=>{ this.up() })
    panel.querySelector('#moveDown').addEventListener('click', ()=>{ this.down() })
    panel.querySelector('#moveLeft').addEventListener('click', ()=>{ this.left() })
    panel.querySelector('#moveRight').addEventListener('click', ()=>{ this.right() })
    panel.querySelector('#shoot').addEventListener('click', ()=>{ this.shoot() })
  }
}
