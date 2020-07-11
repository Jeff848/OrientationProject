import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { apiResponse: "" };
  }

  handleErrors(response) {
    if (!response.ok) {
      console.log("Hello")
       throw Error(response.statusText);
      	
    }
     return response;
  }
    
  callAPI() {
    fetch("http://localhost:9000/test")
    .then(this.handleErrors)
    .then(res => res.text())
    .then(res => this.setState({ apiResponse: res }))
    .catch(error => 
      this.setState({
        apiResponse : "API not responding: " + error
      })
    )
  }

  componentWillMount() {
      this.callAPI();
  }

  render() { 
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p className="App-intro">{this.state.apiResponse}</p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
