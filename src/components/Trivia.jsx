import React, { Component } from 'react';

class App extends Component {
  state = {
    data: []
  };

  // Code is invoked after the component is mounted/inserted into the DOM tree.
  componentDidMount() {
    const url = "https://opentdb.com/api.php?amount=2&category=9&difficulty=medium&type=multiple";

    fetch(url)
      .then(result => result.json())
      .then(result => {
        this.setState({
          data: result.results
        })
        console.log(result.results);
      });
  }

  render() {
    const { data } = this.state;

    const result = data.map((entry) => {
      // console.log(entry);
      let multiChoice = [
        <li key={entry.category}>{entry.question}</li>,
        <li key={entry.category}>{entry.correct_answer}</li>,
        <li key={entry.category}>{entry.incorrect_answers[0]}</li>,
        <li key={entry.category}>{entry.incorrect_answers[1]}</li>,
        <li key={entry.category}>{entry.incorrect_answers[2]}</li>,

      ];
      return multiChoice;
    });

    return <ul>{result}</ul>;
  }
}

export default App;