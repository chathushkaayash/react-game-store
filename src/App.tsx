import { useEffect, useState } from "react";
import apiClient, { CanceledError } from "./services/api-client";
import userService, { User } from "./services/user-service";

function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    const { request, cancel } = userService.getAll();

    request
      .then((res) => {
        setUsers(res.data);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
      });

    return cancel;
  }, []);

  console.log(users);

  const addUser = () => {
    const newUser = { id: 0, name: "Ayash" };
    setUsers([newUser, ...users]); //11
    console.log(users);

    const request = userService.insertEntity(newUser);
    request
      .then(({ data }) => {
        setUsers([data, ...users]); //12
      })
      .then();
  };

  return (
    <>
      {error && <p className="text-danger">{error}</p>}
      {isLoading && <div className="spinner-border"></div>}
      <h1>Users</h1>

      <button className="btn btn-primary mb-3" onClick={addUser}>
        Add User
      </button>
      <ul className="list-group">
        {users.map((user) => (
          <li
            // key={user.id}
            className="list-group-item d-flex justify-content-between"
          >
            {user.name}
            <button className="btn btn-outline-danger">Delete</button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
