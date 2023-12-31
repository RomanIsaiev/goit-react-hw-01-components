import PropTypes from 'prop-types';
import css from './FriendListItem.module.css';

export const FriendListItem = ({ avatar, name, isOnline, id }) => (
  <li className={css.item} key={id}>
    {isOnline ? (
      <span className={css.statusTrue}>{isOnline}</span>
    ) : (
      <span className={css.statusFalse}>{isOnline}</span>
    )}
    <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
    <p className={css.name}>{name}</p>
  </li>
);

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
