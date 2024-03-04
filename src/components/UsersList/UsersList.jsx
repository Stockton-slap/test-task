import React, { useEffect, useMemo, useState } from "react";
import api from "../../apiConfig";
import UsersItem from "../UsersItem";
import Button from "../common/Button";
import Loader from "../Loader";
import Error from "../Error";

export default function UsersList({
  isUserRequestNeeded,
  setIsUserRequestNeeded,
}) {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [totalUsers, setTotalUsers] = useState(null);
  const [page, setPage] = useState(1);

  const memoizedSortedUsers = useMemo(() => {
    return users.sort(
      (userA, userB) =>
        userB.registration_timestamp - userA.registration_timestamp
    );
  }, [users]);

  useEffect(() => {
    const getUsets = async () => {
      try {
        if (isUserRequestNeeded) {
          const { data } = await api.get(`/users?page=${page}&count=6`);

          setTotalUsers(data.total_users);
          setUsers((prev) => [...prev, ...data.users]);
        }
      } catch (e) {
        setError(e.message);
      } finally {
        setLoading(false);
        setIsUserRequestNeeded(false);
      }
    };

    getUsets();
  }, [isUserRequestNeeded, page, setIsUserRequestNeeded, setUsers]);

  const handleShowMoreClick = () => {
    setPage((prev) => prev + 1);
    setIsUserRequestNeeded(true);
  };

  if (loading) return <Loader />;
  if (error) return <Error />;

  return (
    <section className="users-list container" id="usersSection">
      <h1 className="users-list__heading">Working with GET request</h1>
      <ul className="users-list__list">
        {memoizedSortedUsers.map((user) => (
          <UsersItem key={user.id} user={user} />
        ))}
      </ul>
      {page < totalUsers / 6 && (
        <Button
          type="button"
          text="Show more"
          className="btn users-list__btn"
          handleClick={handleShowMoreClick}
        />
      )}
    </section>
  );
}
