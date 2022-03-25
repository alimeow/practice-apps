import React from "react";
import dummyGlosary from './dummyData.jsx';
import GlossaryList from './GlossaryList.jsx';
import Search from './Search.jsx';
import AddWord from './AddWord.jsx';

var newList = [];

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      glossaryList: dummyGlosary
    }

  }

  //add word to data. post to 'glossary' ?
  addWord(val) {
    //send request to dictionaryAPI? or database? to render a word and it's definition to screen
    //what's the second parameter? a value? or a function?
    //axios second para will be an obj for sure?
    axios.post('/glossary', {word: val}) //try a value first
    .then(

    )
    .catch(err => console.log('Error', err))

    this.setState({glossaryList: /* data get from database? */})
  }

  render() {
    return (
      <div>
        <AddWord addWord={this.addWord}/>
        <Search />
        <GlossaryList glossaries={this.state.glossaryList}/>
      </div>
    )
  }

}

export default App;