import React from "react";
import UsersData from "../UsersData";

export default function UsersItem({ user }) {
  const { photo, name, position, email, phone } = user;

  return (
    <li className="users-item">
      <img src={photo} alt="User" className="users-item__img" />
      <UsersData text={name} className={"name"} />
      <UsersData text={position} className={"position"} />
      <UsersData text={email} />
      <UsersData text={phone} />
    </li>
  );
}
