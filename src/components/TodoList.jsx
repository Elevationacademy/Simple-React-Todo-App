import React from 'react';
import { Link } from 'react-router';


class Todo extends React.Component {


    render() {

        return <li onClick={this.props.onClick} className="todo-item">
            <input type="checkbox" checked={this.props.done} onChange={this.props.onTodoCheck}/>
            <Link to={{
                 pathname:`/todo/${this.props._id}`,
                 state:{text:this.props.text} //this is how to pass data into routes (Details component)
            }}>
                {this.props.text}
            </Link>

        </li>


    }
}

class TodoList extends React.Component {

    render() {
        return <ul className="todo-list">
            {this.props.todos.map(todo =>
                <Todo
                    key={todo._id}
                    {...todo}
                    onTodoCheck={() => this.props.toggleTodo(todo._id)}
                />
            )}
        </ul>
    }
}


export default (TodoList);
