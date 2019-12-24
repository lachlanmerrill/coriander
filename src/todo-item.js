import React, { Component } from 'react';

class TodoItem extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: props.name,
            num: props.num
        };
        this.callback = this.callback.bind(this);
    }

    callback() {
        alert("Clicked " + this.state.num + ": " + this.state.name);
    }

    todo_item(name, num) {
        return (
            <div>
                <input type="checkbox" name={name} value={num} onClick={this.callback}/>
                <span>{num} {name}</span>
            </div>
        );
    }

    render() {
        return this.todo_item(this.props.name, this.props.num);
    }
}

export default TodoItem;
