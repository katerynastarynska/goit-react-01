import PropTypes from 'prop-types';
import {
  Card,
  Description,
  Name,
  Tag,
  Location,
  Stats,
  StatsItem,
  Label,
  Quantity,
  AvatarImg,
} from './Profile.styled';

export default function Profile({
  avatar,
  username,
  tag,
  location,
  followersQuantity,
  viewsQuantity,
  likesQuantity,
}) {
  return (
    <Card>
      <Description>
        <AvatarImg src={avatar} alt="User avatar" />
        <Name>{username}</Name>
        <Tag>{tag}</Tag>
        <Location>{location}</Location>

        <Stats>
          <StatsItem>
            <Label>Followers</Label>
            <Quantity>{followersQuantity}</Quantity>
          </StatsItem>
          <StatsItem>
            <Label>Views</Label>
            <Quantity>{viewsQuantity}</Quantity>
          </StatsItem>
          <StatsItem>
            <Label>Likes</Label>
            <Quantity>{likesQuantity}</Quantity>
          </StatsItem>
        </Stats>
      </Description>
    </Card>
  );
}

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,

  followersQuantity: PropTypes.number.isRequired,
  viewsQuantity: PropTypes.number.isRequired,
  likesQuantity: PropTypes.number.isRequired,
};
