import { observer } from 'mobx-react';
import React, { Component } from 'react';
import todoStore from '../stores/TodoStore';
@observer
class TodoFooter extends Component {
    render() {

        return (
            <>

                <footer className="footer">
                    <span className="todo-count"><strong>{todoStore.Count}</strong> item left</span>
                </footer>
            </>
        )
    }
}


export default TodoFooter;