import styles from './ProfileStat.module.css';
import PropTypes from 'prop-types';

export const ProfileStat = ({ label, quantity }) => (
  <li className={styles.item}>
    <span className={styles.label}>{label}</span>
    <span className={styles.quantity}>{quantity}</span>
  </li>
);

ProfileStat.propTypes = {
  label: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
};
