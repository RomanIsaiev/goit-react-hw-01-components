import PropTypes from 'prop-types';
import randomColorRGB from 'random-color-rgb';
import css from './Statistics.module.css';

export const Statistics = ({ title, stats }) => {
  return (
    <section className={css.statistics}>
      {title ? <h2 className={css.title}>Upload stats</h2> : null}
      <ul className={css.statList}>
        {stats.map(item => (
          <li
            className={css.item}
            key={item.id}
            style={{ backgroundColor: randomColorRGB({ min: 100 }) }}
          >
            <span className={css.label}>{item.label}</span>
            <span className={css.percentage}>{item.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  stats: PropTypes.array.isRequired,
};
