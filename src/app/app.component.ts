import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  corPadrao: string = 'black'
  trocouCor: boolean = false;
  trocarCor() {
    this.trocouCor = !this.trocouCor;
    this.corPadrao = this.trocouCor ? 'red' : 'black';
  }
}

