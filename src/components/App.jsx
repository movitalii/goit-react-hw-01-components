import Profile from './Profile/Profile'
import css from './App.module.css';
import user from '../data/user.json'

export const App = () => {
  return (
    <div className={css.wrapper}>
      <Profile key={user.username}
            avatar={user.avatar}
            name={user.username}
            tag={user.tag}
            location={user.location}
            stats={user.stats}
        />
    </div> 
  )
};
