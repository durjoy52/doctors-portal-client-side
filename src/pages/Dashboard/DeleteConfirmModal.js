

const DeleteConfirmModal = ({handleDelete,deleting}) => {
    const {name,email} = deleting
    return (
        <div>
           {/* <!-- The button to open modal --> */}

{/* <!-- Put this part before </body> tag --> */}
<input type="checkbox" id="delete-confirm-modal" className="modal-toggle" />
<div className="modal">
  <div className="modal-box">
    <h3 className="font-bold text-lg text-red-500">Are you sure want to delete user {name}!</h3>
    <div className="modal-action">
    <label htmlFor="delete-confirm-modal" onClick={()=>handleDelete(email)} className="btn btn-error btn-sm">Delete</label>
      <label htmlFor="delete-confirm-modal" className="btn btn-sm">Cancel</label>
    </div>
  </div>
</div> 
        </div>
    );
};

export default DeleteConfirmModal;