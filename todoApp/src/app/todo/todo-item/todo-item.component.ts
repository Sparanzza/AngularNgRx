import { Validators } from "@angular/forms";
import { FormControl } from "@angular/forms";
import { Todo } from "./../model/todo.model";
import { Component, OnInit, Input, ViewChild, ElementRef } from "@angular/core";
import { AppState } from "src/app/app.reducers";
import { Store } from "@ngrx/store";
import { ToggleTodoAction } from "../todo.actions";
@Component({
  selector: "app-todo-item",
  templateUrl: "./todo-item.component.html",
  styles: []
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;
  @ViewChild("txtInputRef", { static: true }) txtInputRef: ElementRef;

  chkField: FormControl;
  txtInput: FormControl;
  editing: boolean;
  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.chkField = new FormControl(this.todo.completed);
    this.txtInput = new FormControl(this.todo.text, Validators.required);

    this.chkField.valueChanges.subscribe(v => {
      const action = new ToggleTodoAction(this.todo.id);
      this.store.dispatch(action);
    });
  }

  edit() {
    this.editing = true;
    setTimeout(() => {
      this.txtInputRef.nativeElement.select();
    }, 10);
  }
  finishEdit() {
    this.editing = false;
  }
}
