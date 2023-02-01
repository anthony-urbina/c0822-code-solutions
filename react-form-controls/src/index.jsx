import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';

// class RegistrationForm extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { username: '', password: '' };
//     this.handleUsernameChange = this.handleUsernameChange.bind(this);
//     this.handlePasswordChange = this.handlePasswordChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   handleUsernameChange(event) {
//     this.setState({ username: event.target.value });
//   }

//   handlePasswordChange(event) {
//     this.setState({ password: event.target.value });
//   }

//   handleSubmit(event) {
//     console.log('state:', this.state);
//     event.preventDefault();
//   }

//   render() {
//     return (
//       <form onSubmit={this.handleSubmit}>
//       <label>
//           Username
//           <input type="text" value={this.state.username} onChange={this.handleUsernameChange} />
//       </label>
//       <label>
//         Password
//           <input type="password" value={this.state.password} onChange={this.handlePasswordChange}/>
//       </label>
//       <button>Sign Up</button>
//     </form>);
//   }
// }

const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);

function RegistrationForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handlePasswordChange = event => {
    const { value } = event.target;
    setPassword(value);
  };

  const handleUsernameChange = event => {
    const { value } = event.target;
    setUsername(value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    console.log({ username, password });
  };

  return (
      <form onSubmit={handleSubmit}>
      <label>
          Username
          <input type="text" value={username} onChange={handleUsernameChange} />
      </label>
      <label>
        Password
          <input type="password" value={password} onChange={handlePasswordChange}/>
      </label>
      <button>Sign Up</button>
    </form>);
}

root.render(<RegistrationForm/>);
