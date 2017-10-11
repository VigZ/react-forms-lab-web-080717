import React from 'react';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userValue: "",
      passwordValue: ""
    };
  }

  formSubmit = (e) =>{
    e.preventDefault()
  }

  handleUser = (e) =>{
    this.setState({
      userValue: e.target.value
    })
  }

  handlePassword = (e)=>{
    this.setState({
      passwordValue: e.target.value
    })
  }



  render() {
    return (
      <form onSubmit={this.formSubmit}>
        <div>
          <label>
            Username
            <input id="test-username" type="text" userValue={this.state.userValue} onChange={this.handleUser}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="test-password" type="password" passwordValue={this.state.passwordValue} onChange={this.handlePassword}/>
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
