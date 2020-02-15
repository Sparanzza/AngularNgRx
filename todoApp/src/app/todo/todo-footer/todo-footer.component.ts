import { Todo } from "./../model/todo.model";
import { AppState } from "src/app/app.reducers";
import { Store } from "@ngrx/store";
import { Component, OnInit } from "@angular/core";
import * as fromFilter from "../../filter/filter.actions";
@Component({
  selector: "app-todo-footer",
  templateUrl: "./todo-footer.component.html",
  styles: []
})
export class TodoFooterComponent implements OnInit {
  validFilters: fromFilter.validFilters[] = ["all", "completed", "pending"];
  currentFilter: fromFilter.validFilters;
  pending: number;
  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.store.subscribe(state => {
      this.countPending(state.todos);
      this.currentFilter = state.filter;
    });
  }

  changeFilter(newFilter: fromFilter.validFilters) {
    const action = new fromFilter.SetFilterAction(newFilter);
    this.store.dispatch(action);
  }

  countPending(todos: Todo[]) {
    this.pending = todos.filter(todo => !todo.completed).length;
  }
}
