import React from "react";

class GlossaryListEntry extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
    }
  }

  render() {
    return (
      <div>
        <span><i>Word:</i> {this.props.glossary.meanings} </span>
        {/* below should display the meaning of the word grab from api */}
        <li>Definition: </li>
        <button>edit</button>
        <button>delete</button>
      </div>
    )
  }


}


export default GlossaryListEntry;