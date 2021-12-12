import React, {Component} from 'react';
import {observer} from 'mobx-react'
import './App.css';
import todoStore from "./stores/TodoStore";
import TodoEntry from './components/TodoEntry';
import TodoItems from './components/TodoItems';
import TodoFooter from './components/TodoFooter';




@observer
class App extends Component {
    render() {
        return [
         <>
         <section className="todoapp">
			<TodoEntry/>
			<TodoItems/>
			<TodoFooter/>
		</section>
         </>
        ]
    }
}


export default App;
