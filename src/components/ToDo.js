import React from "react";

class ToDo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      list: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ input: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    /*
    create a tmp var to store the current value of the list in state.
     push the current value of the input field to the tmp list.
     set state of the list to be the value of the tmp list.
    */

    let tmpList = [...this.state.list]; // using the spread operator
    tmpList.push(this.state.input); // pushing in the current value of the input field.
    this.setState({ list: [...tmpList] }); // use the spread operator to push in the updated list.
  }

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.input}
          onChange={this.handleChange}
        />
        <button onClick={this.handleSubmit}>Add</button>
      </div>
    );
  }
}

export default ToDo;
