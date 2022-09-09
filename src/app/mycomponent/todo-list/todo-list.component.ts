import { Component, Input, OnInit } from '@angular/core';
import { Todos } from 'src/app/Todos';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  @Input() todo : Todos | undefined;
  constructor() { }

  ngOnInit(): void {
  }




}
