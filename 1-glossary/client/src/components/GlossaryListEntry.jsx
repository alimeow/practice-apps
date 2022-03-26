import React from "react";
import axios from "axios";

class GlossaryListEntry extends React.Component {
  constructor(props) {
    super(props)

    this.state = {

    }
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleEdit() {

  }

  handleDelete() {
    //might not need to specify {word = val} since this is alreay only one word obj
    //so it might be ok to not link to App, then delete will not reflect immediately on page. ?
    //-----------------------------------------------------------
    console.log('this.props.glossary.word: ', this.props.glossary.word)
    axios.delete('/glossary', {
      data: {word: this.props.glossary.word}
    })
    //when do i handle err? when do I not need to handle error?
    .then(() => this.props.getAllWords())  //
    .catch(err => console.log('Error while deleting: ', err))
    //------------------------------------------------------------
    // this.props.deleteWord(glossary)
  }

  render() {
    return (
      <div>
        <span><i>Word:</i> {this.props.glossary.word} </span>
        {/* below should display the meaning of the word grab from api */}
        <p>Definition: {this.props.glossary.definition}</p>
        <button onClick={this.handleEdit}>edit</button>
        {/* onSubmit or onClick? */}
        <button onClick={this.handleDelete}>delete</button>
      </div>
    )
  }

}


export default GlossaryListEntry;