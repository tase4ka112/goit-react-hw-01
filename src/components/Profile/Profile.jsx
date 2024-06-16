import css from "./Profile.module.css";

export default function Profile({
  name,
  tag,
  location,
  image,
  stats: { followers, views, likes },
}) {
  return (
    <div className={css.container}>
      <div className={css.profile}>
        <div>
          <img className={css.userAvatar} src={image} alt="User avatar" />
          <p className={css.userName}>{name}</p>
          <p className={css.userTag}>{tag}</p>
          <p className={css.userLocation}>{location}</p>
        </div>

        <ul className={css.userStatsList}>
          <li className={css.userStatsItem}>
            <span className={css.userStatsItemTitle}>Followers</span>
            <span className={css.userStatsItemValue}>{followers}</span>
          </li>
          <li className={css.userStatsItem}>
            <span className={css.userStatsItemTitle}>Views</span>
            <span className={css.userStatsItemValue}>{views}</span>
          </li>
          <li className={css.userStatsItem}>
            <span className={css.userStatsItemTitle}>Likes</span>
            <span className={css.userStatsItemValue}>{likes}</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
