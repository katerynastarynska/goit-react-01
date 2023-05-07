import Profile from './Profile/Profile';
import Statistics from './Statistics/Statistics';
import FriendList from './FriendList/FriendList';
import TransactionHistory from './TransactionHistory/TransactionHistory';

import { Container } from './App.styled';

import user from '../data/user.json';
import data from '../data/data.json';
import friends from '../data/friends.json';
import transactions from '../data/transactions.json';

export function App() {
  return (
    <Container>
             <Profile
          avatar={user.avatar}
          username={user.username}
          tag={user.tag}
          location={user.location}
          followersQuantity={user.stats.followers}
          viewsQuantity={user.stats.views}
          likesQuantity={user.stats.likes}
        />
        <Statistics title="Upload stats" stats={data} />
        <FriendList friends={friends} />
        <TransactionHistory items={transactions} />
    </Container>
  );
}
