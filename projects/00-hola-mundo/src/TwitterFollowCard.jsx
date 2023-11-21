import { useState } from "react";

export default function TwitterFollowCard({
  formatUserName,
  userName,
  name,
}) {
  const [isFollowing, setIsFollowing] = useState(false)

  const text = isFollowing ? "Siguiendo" : "Seguir";
  const handleClick = () => {
    setIsFollowing(!isFollowing)
  }
  const buttonClassName = isFollowing
    ? "tw-followCard-button is-following"
    : "tw-followCard-button";

  return (
    <article className="tw-followCard">
      <header className="tw-followCard-header">
        <img
          className="tw-followCard-avatar"
          src={`https://unavatar.io/${userName}`}
          alt="imagen JC"
        />
        <div className="tw-followCard-info">
          <strong>{name}</strong>
          <span className="tw-followCard-infoUserName">
            {formatUserName(userName)}
          </span>
        </div>
      </header>
      <aside>
        <button onClick={handleClick} className={buttonClassName}>{text}</button>
      </aside>
    </article>
  );
}
