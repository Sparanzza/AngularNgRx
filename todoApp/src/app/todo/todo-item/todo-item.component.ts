import { Validators } from "@angular/forms";
import { FormControl } from "@angular/forms";
import { Todo } from "./../model/todo.model";
import { Component, OnInit, Input, ViewChild, ElementRef } from "@angular/core";

@Component({
  selector: "app-todo-item",
  templateUrl: "./todo-item.component.html",
  styles: []
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;
  @ViewChild("txtInputRef", { static: true }) txtInputRef: ElementRef;

  chkfield: FormControl;
  txtInput: FormControl;
  editing: boolean;
  constructor() {}

  ngOnInit() {
    this.chkfield = new FormControl(this.todo.completed);
    this.txtInput = new FormControl(this.todo.text, Validators.required);
    console.log(this.todo);
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
