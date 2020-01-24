import React, {Component} from 'react';
import './App.css';
import ToDo from './ToDo.js';
import NavBar from './NavBar.js';
import Calendar from './Calendar';

class App extends Component {
    constructor(props) {
      super(props);
      this.state = {
        options: [
          'Todo',
          'Calendar'
        ],
        index: 0
      };
      this.navBarCallback = this.navBarCallback.bind(this);
    }

    navBarCallback(v) {
        let i;
        for (i = 0; i < this.state.options.length; i++) {
            if (this.state.options[i] === v.value) break;
        }
        console.log("selected " + v.value + ": " + i + " [" + this.state.options[i] + "]");
        this.setState({index: i});
    }

    render() {
      switch(this.state.options[this.state.index]) {
        case 'Calendar':
            return (
                <div className="App">
                    <NavBar select_item_callback={this.navBarCallback} options={this.state.options}/>
                    <Calendar />
                </div>
            );
        case 'Todo':
        default:
        return (
            // <div className="AppContainer">
              <div className="App">
                  {/*<div className="NavContainer">*/}
                    <NavBar select_item_callback={this.navBarCallback} options={this.state.options}/>
                  {/*</div>*/}
                  {/*<div className="FeatureContainer">*/}
                     <ToDo />
                  {/*</div>*/}
              </div>
            // </div>
        );
      }
    }
}

export default App;
