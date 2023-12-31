import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css']
})
export class MenuBarComponent {

  @Output() public enviarEvento = new EventEmitter();

  changeColor(){
    this.enviarEvento.emit();
  }

}
