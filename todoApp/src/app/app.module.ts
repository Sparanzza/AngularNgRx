import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { FooterComponent } from "./footer/footer.component";
import { TodoComponent } from "./todo/todo.component";
import { TodoItemComponent } from "./todo/todo-item/todo-item.component";
import { TodoListComponent } from "./todo/todo-list/todo-list.component";
import { TodoFooterComponent } from "./todo/todo-footer/todo-footer.component";
import { TodoAddComponent } from "./todo/todo-add/todo-add.component";

//NgRx
import { StoreModule } from "@ngrx/store";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { todoReducer } from "./todo/todo.reducer";

// Forms
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    TodoComponent,
    TodoItemComponent,
    TodoListComponent,
    TodoFooterComponent,
    TodoAddComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    StoreModule.forRoot({ todos: todoReducer }),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: false,
      features: {
        pause: false,
        lock: true,
        persist: true
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
