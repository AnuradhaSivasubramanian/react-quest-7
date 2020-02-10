import React from "react";
import "./Quoteform.css";
const max_length = 30;
class QuoteForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      character: "Homer Simpson"
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    if (event.target.value.length <= max_length) {
      this.setState({ character: event.target.value });
    }
  }
  render() {
    const maximumReached = this.state.character.length >= max_length;
    const numRemaining = max_length - this.state.character.length;
    return (
      <form className="QuoteForm">
        <label htmlFor="character">Character:</label>
        <input
          className={maximumReached ? "length-maximum-reached" : "length-ok"}
          id="name"
          name="character"
          type="text"
          value={this.state.character}
          onChange={this.handleChange}
        />
        <small className="remaining-characters">
          {numRemaining} remaining characters
        </small>
        <p>
          You typed: <strong>{this.state.character}</strong>
        </p>
      </form>
    );
  }
}

export default QuoteForm;
