import React, { useEffect, useState } from "react";
import api from "../../apiConfig";
import UsersItem from "../UsersItem/UsersItem";

export default function UsersList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const getUsets = async () => {
      try {
        const {
          data: { users },
        } = await api.get("/users?page=1&count=6");

        setUsers(users);
      } catch (e) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    };

    getUsets();
  }, []);

  const handleShowMoreClick = () => {};

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error...</div>;

  return (
    <section className="users-list container">
      <h1 className="heading">Working with GET request</h1>
      <ul>
        {users.map((user) => (
          <UsersItem key={user.id} user={user} />
        ))}
      </ul>
      <button type="button" className="btn" onClick={handleShowMoreClick}>
        Show more
      </button>
    </section>
  );
}
