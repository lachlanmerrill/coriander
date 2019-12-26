import React, {Component} from 'react';


class AddItem extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();

    this.props.add_item_callback({value: this.state.value});

    this.setState({value: ''});
  }

  addItem() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Item:  
          <input name="item" type="text" value={this.state.value} onChange={this.handleChange}/>
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }

  render() {
    return this.addItem();
  }
}

export default AddItem;
