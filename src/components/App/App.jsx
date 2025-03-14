import Profile from "../Profile/Profile";
import { username, tag, location, avatar, stats } from "../../userData.json";

import FriendList from "../FriendList/FriendList";
import friends from "../../friends.json";

import TransactionHistory from "../TransactionHistory/TransactionHistory";
import transactions from "../../transactions.json";

export default function App() {
  return (
    <>
      <Profile
        name={username}
        tag={tag}
        location={location}
        image={avatar}
        stats={stats}
      />

      <FriendList friends={friends} />

      <TransactionHistory items={transactions} />
    </>
  );
}
