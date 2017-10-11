import React from 'react';

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      value: ""
    };
  }

  handleChange= (event) => {
    this.setState({
      value: event.target.value
    })
  }

  render() {
    return (
      <div>
        <h1>Remaining characters:{(this.props.maxChars) - (this.state.value.length)} </h1>
        <strong>Your message:</strong>
        <input type="text"
        value={this.state.value}
        onChange={this.handleChange} />
      </div>
    );
  }
}

export default TwitterMessage;
