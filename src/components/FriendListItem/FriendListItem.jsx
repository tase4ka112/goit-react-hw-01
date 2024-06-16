import css from "./FriendListItem.module.css";

export default function FriendsListItem({
  friend: { avatar, name, isOnline },
}) {
  return (
    <div>
      <img src={avatar} alt="Avatar" width="48" className={css.friendsAvatar} />
      <p className={css.friendsName}>{name}</p>
      <p className={css.friendsStatus}>
        {isOnline ? (
          <span className={css.friendsIsOnline}>Online</span>
        ) : (
          <span className={css.friendsIsOffline}>Offline</span>
        )}
      </p>
    </div>
  );
}
