import * as fromTodo from "./todo.actions";
import { Todo } from "./model/todo.model";

const todo1 = new Todo("Aurelio");
const todo2 = new Todo("Ana Cristina");
const todo3 = new Todo("Dafne");
todo2.completed = true;
const initialState: Todo[] = [todo1, todo2, todo3];
export function todoReducer(
  state = initialState,
  action: fromTodo.Actions
): Todo[] {
  switch (action.type) {
    case fromTodo.ADD_TODO:
      const todo = new Todo(action.text);
      return [...state, todo];
    default:
      return state;
  }
}
