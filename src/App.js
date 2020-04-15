import React, { Component } from 'react';
import Input from './components/Input'
import Wordcount from './components/Wordcount'
import './App.css';

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      lines: '',
      words: '',
      bytes: '',
      wordcount: false
    }
  }

  handleWordcount = (input) => {
    // counts spaces
    const words = input.split(" ");
    // counts number of new lines `\n`
    const lines = input.split(/\n/).length;

    this.setState({
      lines: lines,
      words: words.length,
      bytes: input.length,
      wordcount: true
    })
  }

  render() {
    const { lines, words, bytes, wordcount } = this.state

    return (
      <div className="App">
        <div className="container">
          <Input 
            handleText={this.handleWordcount}
          />
          {wordcount &&
            <Wordcount
              lines={lines}
              words={words}
              bytes={bytes}
            />
          }
        </div>
      </div>
    );
  }
}

export default App;