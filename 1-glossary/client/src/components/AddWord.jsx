import React from "react";

//give it an input box
//gotta have some change so use class
class AddWord extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      searchTerm: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      searchTerm: e.target.value
    })
  }

  //once submit, app renders new word and the definition grabed from api
  handleSubmit() {
    event.preventDefault();
    //link to app

  }

  render() {
    return (
      <div>
        <input type='text' placeholder='add a new word' value={this.state.value} onChange={this.handleChange}></input>
        <button onSubmit={this.handleSubmit}>Add</button>
      </div>
    )
  }


}



export default AddWord;