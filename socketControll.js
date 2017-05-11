class SocketControll extends Controll {
  constructor(socket) {
    this.socket = socket

    this.socket.on('movUp', ()=>{ this.up() })
    this.socket.on('movDonw', ()=>{ this.down()})
    this.socket.on('movLeft', ()=>{ this.left()})
    this.socket.on('movRight', ()=>{ this.right()})
    this.socket.on('shoot', ()=>{ this.shoot()})
  }

}
