import css from './App.module.css';

import Profile from './Profile/Profile';
import Statistics from './Statistics/Statistics';
import FriendList from './FriendList/FriendList';

import user from '../data/user.json';
import data from '../data/data.json';
import friends from '../data/friends.json';


export const App = () => {
  return (
    <div className={css.wrapper}>
      <Profile 
        avatar={user.avatar}
        name={user.username}
        tag={user.tag}
        location={user.location}
        stats={user.stats}
      />
      <Statistics
        title="Upload stats"
        stats={data}
      />
      <FriendList
        friends={friends}
      />
    </div> 
  )
};
