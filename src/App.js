import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import List from './todo-list';
import AddItem from './addItem.js';

class App extends Component {
    constructor(props) {
      super(props);
      this.state = {
          items: (JSON.parse(localStorage.getItem('items')) || []),
          count: JSON.parse(localStorage.getItem('count')) || 0
          // items: []
      };
      this.add_item_callback    = this.add_item_callback.bind(this);
      this.remove_item_callback = this.remove_item_callback.bind(this);
    }

    add_item_callback(data) {
      let item = {
        num: this.state.count + 1,
        name: data.value
      };
      this.state.items.push(item);
      this.setState({items: this.state.items, count: this.state.count + 1});
      localStorage.setItem('items', JSON.stringify(this.state.items));
      localStorage.setItem('count', JSON.stringify(this.state.count));
      this.render();
    }

    remove_item_callback(num) {
      let i = 0;
      for (i = 0; i < this.state.items.length - 1; i++) {
        if (this.state.items[i].num === num) {
          break;
        }
      }

      console.log("num is " + num);
      console.log("state is " + this.state.items[i].num);
      console.log("i is " + i);

      if (this.state.items.length === 0) {
        return;
      } else if (i === this.state.items.length) {
        this.state.items.pop();
      } else {
        this.state.items.splice(i, 1);
      }
      localStorage.setItem('items', JSON.stringify(this.state.items));
      this.setState({items: this.state.items});
      if (this.state.items.length === 0) this.state.count = 0;
      this.render();
    }

    render() {
      return (
        <div className="App">
          <header className="App-header">


            TODO List
            <AddItem  add_item_callback={this.add_item_callback}/>
            <List list={this.state.items} remove_item_callback={this.remove_item_callback}/>
          </header>
        </div>
      );
    }
}

export default App;
