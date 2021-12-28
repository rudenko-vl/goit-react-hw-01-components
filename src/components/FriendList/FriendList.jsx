import PropTypes from 'prop-types';
import {
  ListFriends,
  ItemFriend,
  FriendName,
  FriendImg,
  FriendOnline,
  FriendOffline,
} from 'components/FriendList/FriendList.styled';

export function FriendList({ friends }) {
  return (
    <ListFriends>
      {friends.map(friend => (
        <ItemFriend key={friend.id}>
          {friend.isOnline ? (
            <FriendOnline></FriendOnline>
          ) : (
            <FriendOffline></FriendOffline>
          )}
          <FriendImg src={friend.avatar} alt="User avatar" />
          <FriendName>{friend.name} </FriendName>
        </ItemFriend>
      ))}
    </ListFriends>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      isOnline: PropTypes.bool,
      avatar: PropTypes.string,
      name: PropTypes.string.isRequired,
    })
  ),
};
