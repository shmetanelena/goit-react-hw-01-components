import styles from './Statistics.module.css';
import { StatisticsItem } from 'components/StatisticsItem/StatisticsItem';
import PropTypes from 'prop-types';

export const Statistics = ({ title, stats }) => (
  <section className={styles.statistics}>
    {title && <h2 className={styles.title}>{title}</h2>}
    <ul className={styles.statList}>
      {stats.map(item => (
        <StatisticsItem
          label={item.label}
          percentage={item.percentage}
          key={item.id}
        />
      ))}
    </ul>
  </section>
);

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired
  ),
};
