// import React, { Component } from 'react';
// import Signup from './Signup';
// import Login from './Login';
// // All from tutorial, not real data
// class App extends Component {
//   state = {
//     characters: [],
//   };

//   removeCharacter = (index) => {
//     const { characters } = this.state;

//     this.setState({
//       characters: characters.filter((character, i) => i !== index),
//     });
//   }

//   handleSubmit = (character) => {
//     const { characters } = this.state;
//     this.setState({ characters: [...characters, character] });
//   }

//   render() {
//     const { characters } = this.state;

//     return (
//       <div className="container">
//         <Signup
//           characterData={characters}
//           removeCharacter={this.removeCharacter}
//         />
//         <h3>Add New</h3>
//         <Login handleSubmit={this.handleSubmit} />
//       </div>
//     );
//   }
// }

// export default App;
