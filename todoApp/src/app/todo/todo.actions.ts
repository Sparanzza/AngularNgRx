import { Action } from "@ngrx/store";

export const ADD_TODO = "[TODO] add todo";
export const TOGGLE_TODO = "[TODO] toggle todo";
export const EDIT_TODO = "[TODO] edit todo";
export class AddTodoAction implements Action {
  readonly type = ADD_TODO;

  constructor(public text: string) {}
}

export class ToggleTodoAction implements Action {
  readonly type = TOGGLE_TODO;
  constructor(public id: number) {}
}

export class EditTodoAction implements Action {
  readonly type = EDIT_TODO;
  constructor(public id: number, public text: string) {}
}

export type Actions = AddTodoAction | ToggleTodoAction | EditTodoAction;
