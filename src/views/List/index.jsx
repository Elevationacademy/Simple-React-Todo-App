import React, { Component } from 'react';

import AddTodo from '../../components/AddTodo.jsx';
import TodoList from '../../components/TodoList.jsx';

import api from '../../api';

class TodoApp extends Component {

    constructor() {
        super();

        this.state = {
            todos: []
        }

        api.getAll().then((data) => {
            console.log(data)
            this.setState({todos: data.data});

        })

    }


    addTodo(text) {
        api.add(text).then((data) => {
            var todos = this.state.todos.slice();
            todos.unshift(data.data);
            this.setState({todos: todos});
        });
    }

    toggleTodo(id) {
        var index = this.state.todos.findIndex(todo => todo._id == id);
        var todo = this.state.todos[index];
        todo = {...todo, done:!todo.done};
        console.log(todo)


        api.update(todo).then((data) => {
            var todos = this.state.todos.slice();
            todos[index] = data.data;
            this.setState({todos: todos});
        });

    }

    render() {

        return <div>
            <AddTodo addTodo={this.addTodo.bind(this)}/>
            <TodoList todos={this.state.todos} toggleTodo={this.toggleTodo.bind(this)}/>
        </div>
    }
}

export default TodoApp
