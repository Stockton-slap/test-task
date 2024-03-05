import React from "react";
import UsersDetails from "../UsersDetails";

export default function UsersItem({ user }) {
  const { photo, name, position, email, phone } = user;
  const defaultImage = "/assets/photo-cover.svg";

  return (
    <li className="users-item">
      <img
        src={photo ? photo : defaultImage}
        alt="User"
        className="users-item__img"
      />
      <UsersDetails text={name} className={"name"} />
      <UsersDetails text={position} className={"position"} />
      <UsersDetails text={email} />
      <UsersDetails text={phone} />
    </li>
  );
}
