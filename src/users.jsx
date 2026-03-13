import { use } from "react";

export default function Users({ usersFetch }) {
  const users = use(usersFetch);
  console.log(users)

  return (
    <div className="card">
      <h3>Users: {users.length}</h3>
    </div>
  );
}
