import { useState } from "react";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";
import DeleteConfirmModal from "./DeleteConfirmModal";
import DoctorRow from "./DoctorRow";

const ManageDoctors = () => {
    const[deletingDoctor,setDeletingDoctor] = useState(null)
    console.log(deletingDoctor)
  const { data, isLoading,refetch } = useQuery("doctors", () =>
    fetch("http://localhost:5000/doctor", {
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );
  if (isLoading) {
    return <Loading />;
  }
  return (
    <div>
      <h2>Manage doctors:{data.length}</h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Avatar</th>
              <th>Name</th>
              <th>Specialty</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
            {
                data.map((doctor,index)=><DoctorRow key={doctor._id} setDeletingDoctor={setDeletingDoctor} refetch={refetch} index={index} doctor={doctor}></DoctorRow>)
            }
          </tbody>
        </table>
      </div>
      {
          deletingDoctor && <DeleteConfirmModal deletingDoctor={deletingDoctor} refetch={refetch}/>
      }
    </div>
  );
};

export default ManageDoctors;
