import PropTypes from "prop-types";

import Notification from "../Notification";

import styles from "./Statistics.module.css";

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <>
    {total > 0 && (
      <ul className={styles.StatisticsList}>
        <li className={styles.StatisticsItem}>Good: {good}</li>
        <li className={styles.StatisticsItem}>Neutral: {neutral}</li>
        <li className={styles.StatisticsItem}>Bad: {bad}</li>
        <li className={styles.StatisticsItem}>Total: {total}</li>
        <li className={styles.StatisticsItem}>
          Positive feedback: {positivePercentage}%
        </li>
      </ul>
    )}
    {total === 0 && <Notification message="No feedback given" />}
  </>
);

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
