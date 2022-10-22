import Profile from './Profile/Profile'
import user from '../data/user.json'

export const App = () => {
  return (
 <Profile key={user.username}
            avatar={user.avatar}
            name={user.username}
            tag={user.tag}
            location={user.location}
            stats={user.stats}
        />
  )
};
