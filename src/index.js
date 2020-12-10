import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


class NameForm extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {firstName: ''};
    this.state = {lastName: ''};
    this.state = {email: ''};
    this.state = {note: ''};

    this.handleFirstChange = this.handleFirstChange.bind(this);
    this.handleLastChange = this.handleLastChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleNoteChange = this.handleNoteChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleFirstChange(event) {
    this.setState({firstName: event.target.value});
  }

  handleLastChange(event) {
      this.setState({lastName: event.target.value});
  }

  handleEmailChange(event) {
    this.setState({email: event.target.value});
  }

  handleNoteChange(event) {
    this.setState({note: event.target.value});
  }

  handleSubmit(event) {
    alert('\nFirst Name: ' + this.state.firstName + 
          '\nLast Name: ' + this.state.lastName +
          '\nEmail: ' + this.state.email +
          '\nNote: ' + this.state.note);
    event.preventDefault();
  }

  render() {
    return (
      <>
        <label>Add Users</label>
        <div class="column">
          <form onSubmit={this.handleSubmit}>
            <label>
              First Name
              <input type="text" value={this.state.value} onChange={this.handleFirstChange} />
            </label>
            <label>
              Last Name
              <input type="text" value={this.state.value} onChange={this.handleLastChange} />
            </label>
            <label>
              Email
              <input type="text" value={this.state.value} onChange={this.handleEmailChange} />
            </label>
            <label>
              Note
              <input type="text" value={this.state.value} onChange={this.handleNoteChange} />
            </label>
            <input type="submit" value="Submit" />
          </form>
        </div>

        
      </>
    );
  }
}

ReactDOM.render(
  <React.StrictMode>
    <NameForm />
  </React.StrictMode>,
  document.getElementById('root')
);


