import PropTypes from "prop-types";

import styles from "./FeedbackOptions.module.css";

const FeedbackButton = ({ feedback, onLeaveFeedback }) => {
  return (
    <button
      type="button"
      data-feedback={feedback}
      onClick={onLeaveFeedback}
      className={styles.Button}
    >
      {feedback}
    </button>
  );
};

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div className={styles.BtnList}>
      {options.map((option) => (
        <FeedbackButton feedback={option} onLeaveFeedback={onLeaveFeedback} />
      ))}
    </div>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
