import React, { Component } from 'react';

class TodoItem extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: props.name,
            num: props.num,
            callback: props.cb
        };
        this.callback = this.callback.bind(this);
    }

    callback() {
        this.state.callback(this.state.num);
    }

    render() {
      this.state.name = this.props.name;
      this.state.num = this.props.num;
        return (
            <div>
                <input type="button" name={this.state.name} value={this.state.num} onClick={this.callback}/>
                <span> {this.state.name}</span>
            </div>
        );
    }
}

export default TodoItem;
