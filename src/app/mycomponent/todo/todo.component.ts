import { Component, OnInit } from '@angular/core';
import { Todos } from 'src/app/Todos';


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todos:Todos[] | undefined

  constructor() { 
  this.todos =[
      {
        sno :3,
        title:"this is my todos title3",
        desc : "Describtion3",
        active: true

      },
      {
        sno :4,
        title:"this is my todos title4",
        desc : "Describtion4",
        active: true

      },
      {
        sno :5,
        title:"this is my todos title5",
        desc : "Describtion",
        active: true

      }

    ]
  }

  ngOnInit(): void {
  }

}
