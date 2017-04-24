import React from 'react';

class AddTodo extends React.Component {

    render() {
        return <div className="add-todo">
            <input ref={element => {this.input = element;}}/>

            <button onClick={() => {
                this.props.addTodo(this.input.value);
                this.input.value = '';
            }}>
                Add Todo

            </button>
        </div>
    };
}

export default AddTodo;
