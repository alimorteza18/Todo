import { observer } from 'mobx-react';
import React, { Component } from 'react';
import todoStore from '../stores/TodoStore';
import TodoItem from './TodoItem';
@observer
class TodoItems extends Component {
    render() {
        return (
            <>
                <section className="main">
                    <input id="toggle-all" className="toggle-all" type="checkbox" />
                    <label for="toggle-all">Mark all as complete</label>
                    <ul className="todo-list">
                        {
                            todoStore.todos.map((todo, index) => {
                                return (
                                    <TodoItem todo={todo}
                                        key={index}
                                        onDelete={() => todoStore.todos.splice(index, 1)}
                                    />
                                )
                            })
                        }
                    </ul>
                </section>
            </>
        )
    }
}


export default TodoItems;