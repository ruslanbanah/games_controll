'use strict';

function init(){
  var $panel = document.querySelector('#panel')
  var ctrl = new KeyboardControll($panel)
  //var sctrl = new ScoketControll(scoket)

  window.player1 = new Player('pp1', ctrl)
  window.player2 = new Player('pp2', ctrl)

}

init()
