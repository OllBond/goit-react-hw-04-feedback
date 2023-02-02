import PropTypes from 'prop-types';
import css from './Statistics.module.css';
const Statistics = ({ good, neutral, bad, total, positiveFeedback }) => {
  return (
    <div>
      <p className={css.parFeedback}>Good: {good}</p>
      <p className={css.parFeedback}>Neutral: {neutral}</p>
      <p className={css.parFeedback}>Bad: {bad}</p>
      <p className={css.parFeedback}>Total: {total}</p>
      <p className={css.parFeedback}>Positive feedback: {positiveFeedback}%</p>
    </div>
  );
};
export default Statistics;
Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positiveFeedback: PropTypes.number.isRequired,
};
