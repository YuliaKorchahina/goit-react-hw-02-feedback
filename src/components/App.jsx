import { Component } from 'react';
import { Feedback } from './Feedback/Feedback';
import { Section } from './Feedback/Section';
import { Statistics } from './Feedback/Statistics/Statistics';
export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  leaveFeedback = options => {
    this.setState(prevState => {
      const value = prevState[options];
      return {
        [options]: value + 1,
      };
    });
  };

  countTotalFeedback = () => {
    const { good, bad, neutral } = this.state;
    return good + bad + neutral;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const total = this.countTotalFeedback();
    return total ? Number((good * 100) / total).toFixed(0) : '';
  };

  render() {
    return (
      <div>
      <Section title=''>
        <Feedback onLeaveFeedback={this.leaveFeedback} />
      </Section>
      <Section title=''>
        <Statistics
          onCountTotalFeedback={this.countTotalFeedback}
          onCountPositiveFeedbackPercentage={
            this.countPositiveFeedbackPercentage
          }
          good={this.state.good}
          bad={this.state.bad}
          neutral={this.state.neutral}  />
          </Section>
      </div>
    );
  }
}

export default App;
