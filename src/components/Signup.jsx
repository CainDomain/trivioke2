import React from 'react';
import axios from 'axios';

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      pw: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange() {
    this.setState({
      // [event.target.name]: event.target.value,
    });
  }

  handleSubmit() {
    const signUpInfo = this.state;
    axios({ method: 'POST', url: '/signUp', params: signUpInfo });
  }

  render() {
    return (
      <div>
        Sign Up
        <form>
          <label>
            Username:
            <input type="text" name="name" onChange={this.handleChange} />
          </label>
          <label>
            Password:
            <input type="text" name="pw" onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" onClick={this.handleSubmit} />
        </form>
      </div>
    );
  }
}
export default Signup;
