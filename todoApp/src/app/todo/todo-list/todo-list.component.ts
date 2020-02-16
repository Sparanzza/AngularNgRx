import { validFilters } from "./../../filter/filter.actions";
import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { AppState } from "src/app/app.reducers";
import { Todo } from "../model/todo.model";
@Component({
  selector: "app-todo-list",
  templateUrl: "./todo-list.component.html",
  styles: []
})
export class TodoListComponent implements OnInit {
  todos: Todo[] = [];
  filter: validFilters;
  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.store.subscribe(state => {
      this.filter = state.filter;
      this.todos = state.todos;
    });
  }
}
