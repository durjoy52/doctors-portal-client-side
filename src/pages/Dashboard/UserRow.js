import { BiUser } from 'react-icons/bi';
import { HiUserRemove } from 'react-icons/hi';
import { MdAdminPanelSettings } from 'react-icons/md';
import { toast } from 'react-toastify';
const UserRow = ({ user, refetch,index }) => {
    const { email, role } = user;
    const makeAdmin = () => {
        fetch(`https://floating-fjord-09767.herokuapp.com/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if(res.status === 403){
                    toast.error('Failed to Make an admin');
                }
                return res.json()})
            .then(data => {
                if (data.modifiedCount > 0) {
                    refetch();
                    toast.success(`Successfully made an admin`);
                }

            })
    }
    return (
        <tr>
            <th>{index+1}</th>
            <td className='flex'><BiUser fontSize={20}/>{email}</td>
            <td><MdAdminPanelSettings/>{role !== 'admin' && <button onClick={makeAdmin} className="btn btn-xs">Make Admin</button>}</td>
            <td className='flex'><HiUserRemove fontSize={20}/><button className="btn btn-xs">Remove User</button></td>
        </tr>
    );
};


export default UserRow;