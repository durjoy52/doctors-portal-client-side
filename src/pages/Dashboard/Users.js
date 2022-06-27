import { useState } from "react";
import { useQuery } from "react-query";
import { toast } from "react-toastify";
import Loading from "../Shared/Loading";
import DeleteConfirmModal from "./DeleteConfirmModal";
import UserRow from "./UserRow";
const Users = () => {
  const [deleteUser, setDeleteUser] = useState(null);
  console.log(deleteUser);
  const {
    data: users,
    isLoading,
    refetch,
  } = useQuery("users", () =>
    fetch("https://floating-fjord-09767.herokuapp.com/user", {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );
  if (isLoading) {
    return <Loading></Loading>;
  }
  const handleDelete = (email) => {
    fetch(`https://floating-fjord-09767.herokuapp.com/user/${email}`, {
      method: "DELETE",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        refetch();
        toast.success(`user is deleted.`);
      });
  };
  return (
    <div>
      <h2 className="text-2xl">All Users: {users.length}</h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Job</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <UserRow
                key={user._id}
                user={user}
                setDeleteUser={setDeleteUser}
                index={index}
                refetch={refetch}
              ></UserRow>
            ))}
          </tbody>
        </table>
      </div>
      {deleteUser && (
        <DeleteConfirmModal handleDelete={handleDelete} deleting={deleteUser} />
      )}
    </div>
  );
};

export default Users;
