import React, { Component } from 'react';
import todoStore from '../stores/TodoStore';
class TodoEntry extends Component {
    state = {
        value: ""
    }
    handleKeyDown = event => {
        if (event.keyCode !== 13) {
            return;
        }
        event.preventDefault();
        todoStore.addTodo(this.state.value);
        this.setState({
            value: ""
        })
    }
    render() {
        return (
            <>
                <header className="header">
                    <h1>todos</h1>
                    <input className="new-todo"
                        value={this.state.value}
                        placeholder="What needs to be done?"
                        autofocus
                        onChange={event => this.setState({ value: event.target.value })}
                        onKeyDown={
                            event => this.handleKeyDown(event)
                        }

                    />
                </header>

            </>
        )
    }
}


export default TodoEntry;