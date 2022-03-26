import React from "react";
import axios from "axios";
import Popup from './Popup.js';

class GlossaryListEntry extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      // newDefinition: '',
      popupClicked: false
    }

    this.handleDelete = this.handleDelete.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleEditButtonClick = this.handleEditButtonClick.bind(this);
  }

  handleEditButtonClick() {
    this.setState({popupClicked: !this.state.popupClicked})
    // console.log(this.state.popupClicked)
  }

  handleEdit(val) {
    console.log(val)
    axios.patch('/glossary', {
        word: this.props.glossary.word,    //this.props.glossary.word,
        definition: val        //this.state.newDefinition
    })
    // .then((result) => console.log('result',result))
    .then(() => this.props.getAllWords())
    .catch(err => console.log('Error while editing: ', err))
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
    // this.props.deleteWord(glossary) //another way to implement
  }

  // saveUserDefinition(val) {
    // axios.patch
  // }

  render() {
    return (
      <div>
        <span><i>Word:</i> {this.props.glossary.word} </span>
        <p>Definition: {this.props.glossary.definition}</p>
        <button onClick={this.handleEditButtonClick} >edit definition</button>
        <Popup trigger={this.state.popupClicked} handleEdit={this.handleEdit}turnTriggerOff={this.handleEditButtonClick}>This is the Popup Window</Popup>
        {/* onSubmit or onClick? */}
        <button onClick={this.handleDelete}>delete</button>
      </div>
    )
  }

}


export default GlossaryListEntry;