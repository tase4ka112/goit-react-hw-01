import FriendListItem from "../FriendListItem/FriendListItem";
import css from "./FFriendList.module.css";

export default function Friendlist({ friends }) {
  return (
    <div className={css.container}>
      <ul className={css.friendsList}>
        {friends.map((friend) => (
          <li key={friend.id} className={css.friendsListItem}>
            <FriendListItem friend={friend} />
          </li>
        ))}
      </ul>
    </div>
  );
}
