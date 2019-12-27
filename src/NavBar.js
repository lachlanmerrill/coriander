import React, {Component} from 'react';


class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      select_item_callback: this.props.select_item_callback
    };
    this.handleSelect = this.handleSelect.bind(this);
  }

  handleSelect(event) {
    event.preventDefault();
    this.state.select_item_callback({value: event.target.value})

  }

  render() {
    return (
      // <nav>
      //   {
          this.props.options.map((k) => {
            return (<button onClick={this.handleSelect} value={k}>
              {k}
            </button>);
          })
        // }
      // </nav>
    );
  }
}

export default NavBar;
