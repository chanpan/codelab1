import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state={
    imageUrl:""
  };
  componentDidMount(){
    fetch('http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=7IolS1oNzepR5rF0H2ndF1G0COWIaf7C&limit=5')
    .then(res=>res.json())
    .then(json=>json.data[3].images['downsized'].url)//json.data[0].images['480w_still'].url
    .then((url)=>{
      this.setState({imageUrl:url});
    });
    
     
    
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="rainbow">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
          <hr />
          <img src={this.state.imageUrl} />
        </p>
      </div>
    );
  }
}

export default App;
//http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=7IolS1oNzepR5rF0H2ndF1G0COWIaf7C&limit=5
