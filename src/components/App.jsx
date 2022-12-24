import { Component } from 'react';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  incrementFeedback = event => {
    const { value } = event.target;
    this.setState(prevState => ({
      [value]: prevState[value] + 1,
    }));
  };

  countTotalFeedback = () => {
    const totalFeedbacks =
      this.state.good + this.state.neutral + this.state.bad;
    return totalFeedbacks;
  };

  countPositiveFeedbackPercentage = () => {
    const totalFeedbacks =
      this.state.good + this.state.neutral + this.state.bad;
    const percentage = (this.state.good / totalFeedbacks) * 100;
    return Math.round(percentage) > 0 ? Math.round(percentage) : 0;
  };

  render() {
    const { good, neutral, bad } = this.state;

    return (
      <>
        <Section title="Please leave a feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.incrementFeedback}
          />
        </Section>

        <Section title="Statistics">
          {this.countTotalFeedback() >= 1 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback}
              positivePercentage={this.countPositiveFeedbackPercentage}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </>
    );
  }
}
