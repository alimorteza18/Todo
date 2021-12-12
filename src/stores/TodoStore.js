import {observable, action, computed} from 'mobx'
import TodoModel from "./TodoModel";

class TodoStore {
    // Your code here

    @observable todos = []
    lastID = 0

    @action
    addTodo(title){
        this.todos.push(new TodoModel(this, title, false, this.lastID++))
    }
    @computed get Count() {
        return this.todos.filter(todo => !todo.completed).length;
      }
}

const todoStore = new TodoStore()
export default todoStore
