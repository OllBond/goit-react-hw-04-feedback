import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';
const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div className={css.btnWrapper}>
      {options.map(option => {
        return (
          <button
            className={css.btnFeedback}
            key={option}
            onClick={() => onLeaveFeedback(option)}
            type="button"
          >
            {option}
          </button>
        );
      })}
    </div>
  );
};
export default FeedbackOptions;

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
