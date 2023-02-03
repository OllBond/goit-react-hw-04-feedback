import { useState } from 'react';
import Section from './Section/Section';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Notification from './Notification/Notification';

const App = () => {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });
  // перетворення об'єкта в масив
  const statePropNames = Object.keys(feedback);

  const onLeaveFeedback = feedback => {
    setFeedback(prevState => {
      // скільки попередніх відгуків
      const value = prevState[feedback];
      //розпилюємо попередні відгуки, і потім повертаємо нові відгуки
      return { ...prevState, [feedback]: value + 1 };
    });
  };
  const total = feedback.good + feedback.neutral + feedback.bad;
  // propName - це - good, neutral,bad
  const countPositiveFeedbackPercentage = propName => {
    if (!total) {
      return 0;
    }
    const value = feedback[propName];
    // toFixed округлення 2 значень після коми
    const result = ((value / total) * 100).toFixed(2);
    // toFixed повертає строку - тому Number
    return Number(result);
  };

  const positiveFeedback = countPositiveFeedbackPercentage('good');
  const { good, neutral, bad } = feedback;
  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={statePropNames}
          onLeaveFeedback={onLeaveFeedback}
        />
      </Section>
      {total !== 0 ? (
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
};
export default App;
