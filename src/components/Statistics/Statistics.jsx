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

  countTotalFeedback() {
    const { good, bad, neutral } = this.state;
    return good + bad + neutral;
  }

  countPositiveFeedbackPercentage() {
    const { good } = this.state;
    const total = this.countTotalFeedback();
    return total ? Number((good * 100) / total).toFixed(0) : '';
  }

  render() {
    const { good, bad, neutral } = this.state;
    const total = this.countTotalFeedback();
    const percentage = this.countPositiveFeedbackPercentage() || '';
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
            Good: <span>{good}</span>
          </li>
          <li>
            Neutral: <span>{neutral}</span>
          </li>
          <li>
            Bad: <span>{bad}</span>
          </li>
          <li>
            Total: <span>{total}</span>
          </li>
          <li>
            Positive feedback: <span>{percentage} % </span>
          </li>
        </ul>
      </div>
    );
  }
}
