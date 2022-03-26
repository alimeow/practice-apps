import React from "react";
import dummyGlosary from './dummyData.jsx';
import GlossaryList from './GlossaryList.jsx';
import Search from './Search.jsx';
import AddWord from './AddWord.jsx';
import axios from 'axios';

var newList = [];

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      glossaryList: dummyGlosary
    }

    this.addWord = this.addWord.bind(this);
    this.getAllWords = this.getAllWords.bind(this);
    // this.deleteWord = this.deleteWord.bind(this);
  }

  componentDidMount() {
    this.getAllWords()
    //call back needed?
  }

  getAllWords() {
    axios.get('/glossary') //only one param is needed?
    .then(alldata => {
      console.log(alldata)
      this.setState({glossaryList: alldata.data})
    })
    .catch(err => console.log('Error', err))
  }


  //add word to data. post to 'glossary' ?
  addWord(val) {
    //send request to dictionaryAPI? or database? to render a word and it's definition to screen
    //what's the second parameter? a value? or a function?
    //axios second para will be an obj for sure?
    axios.post('/glossary', {word: val}) //try a value first
    .then((result) => {
      //if result is all the data, then we can set state to result
      console.log(result)
      this.setState({glossaryList: result.data})  //*** come back to check */
    })
    .catch(err => console.log('Error', err))
  }

  //delete word (in case needed)
  // deleteWord(val) {
  //   console.log(val)
  //   axios.delete('/glossary', {
  //     word: val
  //   })
  //   //when do i handle err? when do I not need to handle error?
  //   .then((response) => console.log(response))
  //   .catch(err => console.log('Error while deleting: ', err))
  // }

  render() {
    return (
      <div>
        <AddWord addWord={this.addWord}/>
        <Search />
        <GlossaryList glossaries={this.state.glossaryList} getAllWords={this.getAllWords}/>
      </div>
    )
  }

}

export default App;