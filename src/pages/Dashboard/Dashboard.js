import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';
import Loading from '../Shared/Loading';

const Dashboard = () => {
  const [user] = useAuthState(auth)
  const [admin,adminLoading] = useAdmin(user)
  if(adminLoading){
    return <Loading/>
  }
    return (
        <div className="drawer drawer-mobile">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content flex flex-col">
    {/* <!-- Page content here --> */}
    <h2 className='text-5xl text-purple-500'>Dashboard</h2>
    <Outlet/>
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
    <ul className="menu p-4 overflow-y-auto w-48 bg-base-100 text-base-content">
      {/* <!-- Sidebar content here --> */}
      <li><Link to='/dashboard'>myAppointment</Link></li>
      <li><Link to='/dashboard/review'>Review</Link></li>
      <li><Link to='/dashboard/myhistory'>MyHistory</Link></li>
      {admin && <>
        <li><Link to='/dashboard/users'>All Users</Link></li>
        <li><Link to='/dashboard/addDoctor'>Add a Doctor</Link></li>
        <li><Link to='/dashboard/managedoctor'>Manage Doctor</Link></li>
      </>}
    </ul>
  
  </div>
</div>
    );
};

export default Dashboard;