import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TO-DO LIST';
  list:any[] = [];//La lista va a poder recibir cualquier cosa y por defaulta estaá en blanco
  addTask(item: string) { //Funcion que se llama desde app.component.html
      this.list.push({
      id:this.list.length, name:item
    });
    console.warn(this.list);
  }

  removeTask(id:number) {
    console.warn(id);
    this.list = this.list.filter(item => item.id !== id); 
  }
}
