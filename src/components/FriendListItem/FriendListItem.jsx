import PropTypes from 'prop-types';
import css from './FriendListItem.module.css';

export default function FriendListItem({ id, avatar, name, isOnline }) {
    return (
        <li key={id} className={css.item}>
            {isOnline
                ? <span className={css.online}></span>
                : <span className={css.offline}></span>
            }
            
            <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
            <p className={css.name}>{name}</p>
        </li>
    );
};

FriendListItem.propTypes = {
  id: PropTypes.number.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

