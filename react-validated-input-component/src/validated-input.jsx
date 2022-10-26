import React from 'react';

class InputField extends React.Component {
  constructor(props) {
    super(props);
    this.state = { password: '' };
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
  }

  render() {
    return (
    <div className='container'>
      <div>
          <label>
            Password
            <input type="password" value={this.state.password} onChange={this.handlePasswordChange}/>
          </label>
          <i className={this.chooseIcon()}></i>
      </div>
        <p>{this.validatePassword()}</p>
    </div>
    );
  }

  validatePassword() {
    const password = this.state.password;
    if (!password) {
      return 'A password is required.';
    } else if (password.length < 8) {
      return 'Password must be at least 8 characters.';
    } else if (!password.match(/[0-9]/)) {
      return 'Password must include at least one number';
    } else if (!password.match(/[A-Z]/)) {
      return 'Password must include at least one capital letter.';
    } else if (!password.match(/\W|_/)) {
      return 'Password must include at least one special character';
    }
  }

  chooseIcon() {
    const password = this.state.password;
    if (password && password.length > 8) {
      return 'fa-solid fa-check';
    } else {
      return 'fa-solid fa-x';
    }
  }

  handlePasswordChange(event) {
    this.setState({ password: event.target.value });
  }
}

export default InputField;
