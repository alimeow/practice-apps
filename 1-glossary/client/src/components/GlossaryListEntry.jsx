import React from "react";

class GlossaryListEntry extends React.Component {
  constructor(props) {
    super(props)

    this.state = {

    }

  }

  handleEdit() {

  }

  handleDelete() {

  }

  render() {
    return (
      <div>
        <span><i>Word:</i> {this.props.glossary.word} </span>
        {/* below should display the meaning of the word grab from api */}
        <p>Definition: {this.props.glossary.definition}</p>
        <button onSubmit={this.handleEdit}>edit</button>
        {/* onSubmit or onClick? */}
        <button onSubmit={this.handleDelete}>delete</button>
      </div>
    )
  }


}


export default GlossaryListEntry;