import PropTypes from 'prop-types';

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
    <div class="profile">
      <div class="description">
        <img src={avatar} alt="User avatar" class="avatar" width="200" />
        <p class="name">{username}</p>
        <p class="tag">{tag}</p>
        <p class="location">{location}</p>
      </div>

      <ul class="stats">
        <li>
          <span class="label">Followers</span>
          <span class="quantity">{followersQuantity}</span>
        </li>
        <li>
          <span class="label">Views</span>
          <span class="quantity">{viewsQuantity}</span>
        </li>
        <li>
          <span class="label">Likes</span>
          <span class="quantity">{likesQuantity}</span>
        </li>
      </ul>
    </div>
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
