import styles from './StatisticsItem.module.css';
import PropTypes from 'prop-types';

export const StatisticsItem = ({ label, percentage, color }) => (
  <li className={styles.item} style={{ backgroundColor: color }}>
    <span className={styles.label}>{label}</span>
    <span className={styles.percentage}>{percentage}</span>
  </li>
);

StatisticsItem.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
};
