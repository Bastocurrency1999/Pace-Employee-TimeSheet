import React from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { NavLink } from 'react-router-dom';
import { logout } from '../../../actions/auth/authAction';
import { ToastContainer } from 'react-toastify'
import { logOutSuccess } from '../../../toaster';

const Sidebar = () => {
    const dispatch = useDispatch();
    const { isLoggedIn } = useSelector((state)=> state.authenticationState);

    
    const logOut = () =>{
        logOutSuccess()
        setTimeout(() => {
            dispatch(logout());
        }, 2000);
    }
    return(
        <>
        <ToastContainer />
        <style>
            {
                `
                    .Toastify__toast--warning{
                        background: rgb(255,112,150);
                        color: #FFFFFF;
                    }
                `
            }
        </style>
            <div id="sidebar" className="sidebar py-3">
                    <div className="text-gray-400 text-uppercase px-3 px-lg-4 py-4 font-weight-bold small headings-font-family" id="role_display">Admin</div>
                        <ul className="sidebar-menu list-unstyled">
                            <li className="sidebar-list-item"><NavLink exact to="/dashboard" className="sidebar-link text-muted" activeclassname="active"><i className="o-home-1 mr-3 text-gray"></i><span>Dashboard</span></NavLink></li>
                            <li className="sidebar-list-item"><a href="#" data-toggle="collapse" data-target="#manage-employee" aria-expanded="false" aria-controls="manage-employee" className="sidebar-link text-muted" ><i className="o-user-details-1 mr-3 text-gray"></i><span>Employee</span></a>
                                <div id="manage-employee" className="collapse">
                                    <ul className="sidebar-menu list-unstyled border-left border-primary border-thick">
                                        <li className="sidebar-list-item"><NavLink to="/dashboard/employ" className="sidebar-link text-muted pl-lg-5">Add Employee</NavLink></li>
                                        <li className="sidebar-list-item"><NavLink to="/dashboard/employee-list" className="sidebar-link text-muted pl-lg-5">View Employee</NavLink></li>
                                    </ul>
                                </div>
                            </li>
                            <li className="sidebar-list-item"><NavLink exact to="/dashboard/task" className="sidebar-link text-muted" activeclassname="active"><i className="fas fa-tasks mr-3 text-gray"></i><span>Task</span></NavLink></li>
                            <li className="sidebar-list-item"><NavLink exact to="/dashboard/forms" className="sidebar-link text-muted" activeclassname="active"><i className="o-timing-1 mr-3 text-gray"></i><span>e-schedule</span></NavLink></li>
                            <li className="sidebar-list-item"><NavLink exact to="/dashboard/todos" className="sidebar-link text-muted" activeclassname="active"><i className="o-paper-stack-1 mr-3 text-gray"></i><span>Todo</span></NavLink></li>
                            <li className="sidebar-list-item"><NavLink exact to="/dashboard/calendar" className="sidebar-link text-muted" activeclassname="active"><i className="o-table-content-1 mr-3 text-gray"></i><span>Calendar</span></NavLink></li>
                            <li className="sidebar-list-item"><a href="#" data-toggle="collapse" data-target="#report" aria-expanded="false" aria-controls="pages" className="sidebar-link text-muted" activeclassname="active"><i className="o-wireframe-1 mr-3 text-gray"></i><span>Report</span></a>
                                <div id="report" className="collapse">
                                    <ul className="sidebar-menu list-unstyled border-left border-primary border-thick">
                                        <li className="sidebar-list-item"><NavLink to="/dashboard/timer-report" className="sidebar-link text-muted pl-lg-5">Timer</NavLink></li>
                                        <li className="sidebar-list-item"><NavLink to="/dashboard/billing-report" className="sidebar-link text-muted pl-lg-5">Billing</NavLink></li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    <div className="text-gray-400 text-uppercase px-3 px-lg-4 py-4 font-weight-bold small headings-font-family">EXTRAS</div>
                    <ul className="sidebar-menu list-unstyled">
                        <li className="sidebar-list-item"><NavLink to="request.html" className="sidebar-link text-muted" activeclassname="active"><i className="o-letter-1 mr-3 text-gray"></i><span>Request</span></NavLink></li>
                        <li className="sidebar-list-item"><NavLink to="billing.html" className="sidebar-link text-muted" activeclassname="active"><i className="o-database-1 mr-3 text-gray"></i><span>Billing</span></NavLink></li>
                        <li className="sidebar-list-item"><NavLink to="/dashboard/settings" className="sidebar-link text-muted" activeclassname="active"><i className="o-settings-window-1 mr-3 text-gray"></i><span>Settings</span></NavLink></li>
                        <li className="sidebar-list-item"><span onClick={logOut} className="sidebar-link text-muted cursor" activeclassname="active"><i className="o-exit-1 mr-3 text-gray"></i><span>Logout</span></span></li>
                    </ul>
                </div>
        </>
    )
}

export default Sidebar;