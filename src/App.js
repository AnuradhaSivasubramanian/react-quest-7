import React from "react";
// import Navbar from "./components/Navbar";
// import QuoteForm from "./components/Quoteform";
// import axios from "axios";
import FavMovie from "./components/FavMovie";
// import QuoteCard from "./components/QuoteCard";

// import QuoteList from "./components/QuoteList";
// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       simpsonquote: {}
//     };
//     this.getQuote = this.getQuote.bind(this);
//   }
//   componentDidMount() {
//     this.getQuote();
//   }
//   getQuote() {
//     axios
//       .get("https://simpsons-quotes-api.herokuapp.com/quotes")
//       // Extract the DATA from the received response
//       .then(response => response.data)
//       // Use this data to update the state
//       .then(data => {
//         this.setState({
//           simpsonquote: data[0]
//         });
//       });
//   }
//   render() {
//     return (
//       <div className="App">
//         <button type="button" onClick={this.getQuote}>
//           Get a Simpson's quote
//         </button>

//         <figure className="QuoteCard">
//           <img
//             src={this.state.simpsonquote.image}
//             alt={this.props.character}
//           ></img>
//           <figcaption>
//             <blockquote>{this.state.simpsonquote.quote}</blockquote>
//             <p>
//               <cite>{this.state.simpsonquote.character}</cite>
//             </p>
//           </figcaption>
//         </figure>
//       </div>
//     );
//   }
// }
class App extends React.Component {
  render() {
    return <FavMovie />;
  }
}

export default App;
