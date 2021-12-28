import styled from '@emotion/styled';

export const ListFriends = styled.ul`
  display: flex;
  margin: 0 auto;
  padding: 40px 20px;
  list-style: none;
`;
export const ItemFriend = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 80px;
  height: 140px;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0 0 14px 0px #3d3834;
  :not(:last-child) {
    margin-right: 20px;
  }
`;
export const FriendImg = styled.img`
  width: 50px;
  height: 50px;
`;

export const FriendName = styled.p`
  font-size: 20px;
  font-weight: 700;
  color: blue;
  text-align: center;
  margin: 10px 0 0 0;
`;
export const FriendOnline = styled.span`
  width: 20px;
  height: 20px;
  align-items: center;
  border-radius: 50%;
  background-color: green;
`;
export const FriendOffline = styled.span`
  width: 20px;
  height: 20px;
  align-items: center;
  border-radius: 50%;
  background-color: red;
`;
