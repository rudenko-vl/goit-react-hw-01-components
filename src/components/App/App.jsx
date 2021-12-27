import user from '../../db/user.json';
import { Container } from './App.styled';
// import data from "../../db/data.json";
// import friends from "../../db/friends.json";
// import transactions from "../../db/transactions.json";

import { Profile } from 'components/Profile/Profile';

export function App() {
  return (
    <Container>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
    </Container>
  );
}
