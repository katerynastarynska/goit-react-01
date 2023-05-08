import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem';
import { AllFriendList, Friend } from './FriendList.styled';

export default function FriendList({ friends }) {
  return (
    <AllFriendList>
      {friends.map(friend => (
        <Friend key={friend.id}>
          <FriendListItem
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
          />
        </Friend>
      ))}
    </AllFriendList>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
};
