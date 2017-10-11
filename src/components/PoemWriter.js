import React from 'react';

class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      value: "",
      valid: false
    };
  }

  validPoem = (text) => {
    // let poem = this.state.value.trim()
    let poem = text.trim()
    let poemArray=poem.split('\n')
    if(!poem || poemArray.length !== 3 || poemArray[0].trim().split(/\s+/).length !== 5 || poemArray[1].trim().split(/\s+/).length !== 3 || poemArray[2].trim().split(/\s+/).length !== 5){
      return false
      //  this.setState({
      //    valid: false
      //  })
    }else{
      return true
      //  this.setState({
      //    valid:  true
      //  })
       console.log("Poem is valid");
    }
  }

  handleTyping(e){
    this.setState({
      value: e.target.value,
      valid: this.validPoem(e.target.value)
    })
  }
  render() {
    return (
      <div>
        <textarea
          rows="3"
          cols="60"
          value={this.state.value}
          onChange= {this.handleTyping.bind(this)}
        />
        {this.state.valid ? null :
        <div
          id="poem-validation-error"
          style={{color: 'red'}}
        >
          This poem is not written in the right structure!
        </div>
      }
      </div>
    );
  }
}

export default PoemWriter;
