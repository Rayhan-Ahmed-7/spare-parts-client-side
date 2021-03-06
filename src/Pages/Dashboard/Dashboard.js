import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import Loading from '../../Components/Shared/Loading/Loading';
import auth from '../../firebase.init';
import useAdmin from '../../Hooks/useAdmin';

const Dashboard = () => {
    const [user] = useAuthState(auth);
    const [admin, adminLoading] = useAdmin(user);
    if(adminLoading){
        return <Loading></Loading>
    }
    console.log(admin);
    return (
        <div>
            <header className='flex justify-between items-center w-11/12 mx-auto py-3'>
                <h2 className='text-3xl text-accent uppercase font-bold'>Dashboard</h2>
                <label tabIndex="1" htmlFor="dashboard-sidebar" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
            </header>
            <div className="drawer drawer-mobile">
                <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet />
                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-sidebar" className="drawer-overlay"></label>
                    <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content space-y-4">
                        <li><Link to='/dashboard'>My Profile</Link></li>
                        {
                            !admin && <>
                                <li><Link to='/dashboard/myOrders'>My Orders</Link></li>
                                <li><Link to='/dashboard/addReview'>Add Review</Link></li>
                            </>
                        }
                        {
                            admin && <>
                                <li><Link to='/dashboard/manageOrders'>Manage Orders</Link></li>
                                <li><Link to='/dashboard/addSpareParts'>Add spareParts</Link></li>
                                <li><Link to='/dashboard/manageSpareParts'>Manage SpareParts</Link></li>
                                <li><Link to='/dashboard/manageUsers'>Manage Users</Link></li>
                            </>
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;