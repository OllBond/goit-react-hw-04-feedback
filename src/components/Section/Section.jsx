import PropTypes from 'prop-types';
import css from './Section.module.css';
const Section = ({ children, title }) => {
  return (
    <div>
      <h3 className={css.titleFeedback}>{title}</h3>
      {children}
    </div>
  );
};

export default Section;
Section.propTypes = {
  children: PropTypes.element.isRequired,
  title: PropTypes.string.isRequired,
};
