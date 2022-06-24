import { toast } from 'react-toastify';

const DeleteConfirmModal = ({deletingDoctor,refetch}) => {
    const {name,email} = deletingDoctor
    const handleDelete = email =>{
        fetch(`http://localhost:5000/doctor/${email}`,{
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
                    toast.success(`Doctor: ${name} is deleted.`)
                }
        })
    }
    return (
        <div>
           {/* <!-- The button to open modal --> */}

{/* <!-- Put this part before </body> tag --> */}
<input type="checkbox" id="delete-confirm-modal" className="modal-toggle" />
<div className="modal">
  <div className="modal-box">
    <h3 className="font-bold text-lg text-red-500">Are you sure want to delete user {name}!</h3>
    <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
    <div className="modal-action">
    <label for="delete-confirm-modal" onClick={()=>handleDelete(email)} className="btn btn-error">Delete</label>
      <label for="delete-confirm-modal" className="btn btn-xs">Cancel</label>
    </div>
  </div>
</div> 
        </div>
    );
};

export default DeleteConfirmModal;