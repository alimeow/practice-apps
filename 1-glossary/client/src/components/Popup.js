import React from 'react';

// function Popup(props) {
//   return (props.trigger) ? (
//     <div className='popup'>
//       <div>
//         <form className='inputform'>
//           <span className='description'>Enter new definition:</span>
//           <input type='text' className='inputbracket'></input>
//           <input type='submit' value='SAVE' className='submitbutton' />
//         </form>
//         {/* {props.children} */}
//       </div>
//     </div>
//   ) : "";
// }

class Popup extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      userInput: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e){
    this.setState({userInput: e.target.value})
    console.log(this.state.userInput) //why did it give me a new line everytime
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.handleEdit(this.state.userInput);
    this.props.turnTriggerOff();
  }

  render() {
      return (this.props.trigger) ? (
        <div className='popup'>
          <div>
            <form className='inputform' onSubmit={this.handleSubmit}>
              <span className='description'>Enter new definition:</span>
              <input type='text' className='inputbracket' value={this.state.userInput} onChange={this.handleChange}></input>
              <input type='submit' value='SAVE' className='submitbutton'/>
            </form>
            {/* {props.children} */}
          </div>
        </div>
      ) : "";
  }
}



export default Popup;

// onSubmit={props.}