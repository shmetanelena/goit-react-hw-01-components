import styles from './StatisticsItem.module.css';
import PropTypes from 'prop-types';

const getRandomHexColor = () => {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};

export const StatisticsItem = ({ label, percentage }) => (
  <li className={styles.item} style={{ backgroundColor: getRandomHexColor() }}>
    <span className={styles.label}>{label}</span>
    <span className={styles.percentage}>{percentage}</span>
  </li>
);

StatisticsItem.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};
