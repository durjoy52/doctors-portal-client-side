import { useState } from "react";
import { useQuery } from "react-query";
import { toast } from 'react-toastify';
import Loading from "../Shared/Loading";
import DeleteConfirmModal from "./DeleteConfirmModal";
import DoctorRow from "./DoctorRow";
const ManageDoctors = () => {
    const[deletingDoctor,setDeletingDoctor] = useState(null)
  const { data, isLoading,refetch } = useQuery("doctors", () =>
    fetch("https://floating-fjord-09767.herokuapp.com/doctor", {
      method:'GET',
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
    .then((res) => res.json())
  );
  const handleDelete = email =>{
    fetch(`https://floating-fjord-09767.herokuapp.com/doctor/${email}`,{
        method:'DELETE',
        headers:{
            authorization: `Bearer ${localStorage.getItem("accessToken")}`
        }
    })
    .then(res=>res.json())
    .then(data=>{
        console.log(data)
            if(data.deletedCount > 0){
                refetch()
                toast.success(`Doctor is deleted.`)
            }
    })
}
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
          deletingDoctor && <DeleteConfirmModal deleting={deletingDoctor} handleDelete={handleDelete}/>
      }
    </div>
  );
};

export default ManageDoctors;
