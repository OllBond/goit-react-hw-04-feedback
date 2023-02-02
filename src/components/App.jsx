import { Component } from 'react';
import Section from './Section/Section';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Notification from './Notification/Notification';
export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  // перетворення об'єкта в масив
  statePropNames = Object.keys(this.state);
  //   функція, яка змінює state, feedback - це good, neutral, bad
  onLeaveFeedback = feedback => {
    // якщо нове значення залежить від попереднього - передається call-back
    this.setState(prevState => {
      // вираховувані властивості об'єкта
      return { [feedback]: prevState[feedback] + 1 };
    });
  };
  countTotalFeedback() {
    // деструктуризація об'єкту state
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    return total;
  }
  countPositiveFeedbackPercentage(propName) {
    const total = this.countTotalFeedback();
    if (!total) {
      return 0;
    }
    // this.state.good
    const value = this.state[propName];
    // toFixed округлення 2 значень після коми
    const result = ((value / total) * 100).toFixed(2);
    // toFixed повертає строку - тому Number
    return Number(result);
  }

  render() {
    const total = this.countTotalFeedback();
    const positiveFeedback = this.countPositiveFeedbackPercentage('good');
    const { good, neutral, bad } = this.state;
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={this.statePropNames}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>
        {this.countTotalFeedback() !== 0 ? (
          <Section title="Statistics">
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positiveFeedback={positiveFeedback}
            />
          </Section>
        ) : (
          <Notification message="There is no feedback" />
        )}
      </>
    );
  }
}
