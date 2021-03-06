import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public jogoEmAndamento: boolean = true;
  public tipoEncerramento: string = ''

  public encerrarJogo(tipoEncerramento: string){
    this.jogoEmAndamento = false;
    this.tipoEncerramento = tipoEncerramento;
  }

  public reiniciarJogo(){
    this.jogoEmAndamento = true;
    this.tipoEncerramento = '';
  }
}
