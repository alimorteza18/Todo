import { observer } from 'mobx-react';
import React, { Component } from 'react';
@observer
class TodoItem extends Component {
    onToggle = () => {
        this.props.todo.toggle()
    }
    render() {
        const { todo, onDelete } = this.props
        return (
            <>
                <li className={todo.completed ? 'completed' : ''}>
                    <div class="view">
                        <input className="toggle" type="checkbox" checked={todo.completed} onChange={this.onToggle} />
                        <label>{todo.title}</label>
                        <button className="destroy"
                            onClick={onDelete}
                        ></button>
                    </div>
                    <input className="edit" value="Rule the web" />
                </li>
            </>
        )
    }
}


export default TodoItem;