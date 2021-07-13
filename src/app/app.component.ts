import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public tarefa = "";
  public itens = ["Ex: Estudar"];

  adicionar(){
    this.itens.push(this.tarefa);
    this.tarefa = "";
    // this.tarefa.focus()
  }

  remover(index: number){
    this.itens.splice(index,1)
  }
  
}
