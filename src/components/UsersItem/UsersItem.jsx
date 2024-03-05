import React from "react";
import UsersData from "../UsersDetails";

export default function UsersItem({ user }) {
  const { photo, name, position, email, phone } = user;
  const defaultImage = "/assets/photo-cover.svg";

  return (
    <li className="users-item">
      <img
        src={photo ? photo : defaultImage}
        alt="User"
        className="users-item__img"
        loading="lazy"
      />
      <UsersData text={name} className={"name"} />
      <UsersData text={position} className={"position"} />
      <UsersData text={email} />
      <UsersData text={phone} />
    </li>
  );
}
