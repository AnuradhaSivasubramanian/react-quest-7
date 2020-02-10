import React from "react";
import "./QuoteCard.css";

class QuoteCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      favourite: false
    };
  }

  render() {
    const eventListenerForClick = event => {
      if (this.state.favourite) {
        this.setState({ favourite: false });
      } else {
        this.setState({ favourite: true });
      }
    };

    return (
      <figure className="QuoteCard">
        <img src={this.props.image} alt={this.props.character}></img>
        <figcaption>
          <blockquote>{this.props.quote}</blockquote>
          <p>
            <cite>{this.props.character}</cite>
            <span
              className={this.state.favourite ? "is-favorite" : ""}
              onClick={eventListenerForClick}
            >
              &#9733;
            </span>
          </p>
        </figcaption>
      </figure>
    );
  }
}

export default QuoteCard;
