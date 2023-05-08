import PropTypes from 'prop-types';
import {
  FriendInfo,
  FriendStatus,
  FriendsAvatarImage,
  FriendsName,
} from './FriendListItem.styled';

export default function FriendListItem({ avatar, name, isOnline }) {
  return (
    <FriendInfo>
      <FriendStatus style={{ backgroundColor: isOnline ? 'green' : 'red' }}>
        {isOnline}
      </FriendStatus>
      <FriendsAvatarImage src={avatar} alt="User avatar" />
      <FriendsName>{name}</FriendsName>
    </FriendInfo>
  );
}

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
