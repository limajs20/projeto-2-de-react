import React from 'react';
import './App.css';
import Navigation from './Components/Navigation/Navigation';
import Logo from './Components/Logo/Logo';
import ImageLinkform from './Components/ImageLinkform/ImageLinkform';
import Rank from './Components/Rank/Rank';

function App() {
  constructor() {
    super();
    this.state = {
      input: '',
    }
  }

  onInputChange = (event) => {
     console.log(event)
  }
  return (
    <div className="App">
      <Navigation />
      <Logo />
      <Rank />
      <ImageLinkform onInputChange={this.onInputChange}/>
      {/*
           <FaceRecognition />*/}
    </div>
  );
}

export default App;
