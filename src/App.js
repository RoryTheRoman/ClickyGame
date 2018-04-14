import React, { Component } from 'react';
import logo from './favicon.ico';
import './App.css';
import ImageCard from "./components/ImageCard";
import images from "./images.json";
import Wrapper from "./components/Wrapper";


class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    images: images,
    score: 0,
    highScore: 0,
    unMatched: images,
    message: "Click Any Image To Begin!"
  };

  shuffleArray = array => {
  let i = array.length - 1;
  for (; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}

  clickedImages = id => {
    //save state in a variable
    // const selection = this.state.unMatched;

    //function to filter the matched array, store in variable
    const clicked = this.state.unMatched.find(image => image.id === id);

    if(clicked === undefined) {
      this.setState({
        message : "So sorry, you chose the same image twice!",
        score : 0,
        highScore : (this.state.score > this.state.highScore) ? this.state.score : this.state.highScore,
        images : images,
        unMatched : images

      });
      
    }else{
      const updatedArray = this.state.unMatched.filter(match => match.id !== id);
      this.setState({
        message : "Good job, keep going!",
        score : this.state.score + 1,
        images : images,
        unMatched : updatedArray


      })
    }

    this.shuffleArray(images);

  }

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
 
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to ClickyGame! Click each image only once.</h1>

        </header>
        <div className="conatiner-fluid">
          <div className="row">
          <div className="col-xs-3">
              <h3>Click Counter: {this.state.score}</h3>
          </div>
            <div className="col-xs-3">
              <h3>Top Score: {this.state.highScore} </h3>
            </div>
            <div className="col-xs-6">
              <h3>{this.state.message} </h3>
            </div>
             
          </div>
        </div>
        <Wrapper>
          
          {this.state.images.map(image => (
              <ImageCard
                id={image.id}
                key={image.id}
                name={image.name}
                image={image.image}
                clickedImages={this.clickedImages}
              />

          ))}


        </Wrapper>
      </div>

    );
  }
}
export default App;



// <ImageCard
// source={images[0].source}
// />