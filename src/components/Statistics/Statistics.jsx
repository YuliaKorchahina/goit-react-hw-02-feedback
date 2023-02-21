import { Component } from 'react';

export class Statistics extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleLeaveReview(name) {
    this.setState(prevState => {
      const value = prevState[name];
      return {
        [name]: value + 1,
      };
    });
  }

  render() {
    const { good, bad, neutral } = this.state;
    return (
      <div>
        <h2>Please leave feedback</h2>
        <div>
          <button type="button" onClick={() => this.handleLeaveReview('good')}>
            good
          </button>
          <button
            type="button"
            onClick={() => this.handleLeaveReview('neutral')}
          >
            neutral
          </button>
          <button type="button" onClick={() => this.handleLeaveReview('bad')}>
            bad
          </button>
          <h3>Statistics</h3>
        </div>
        <ul>
          <li>
            good <span>{good}</span>
          </li>
          <li>
            neutral <span>{neutral}</span>
          </li>
          <li>
            bad <span>{bad}</span>
          </li>
        </ul>
      </div>
    );
  }
}
