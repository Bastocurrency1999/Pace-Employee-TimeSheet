import { React, Component } from 'react';
import Navbar from '../layouts/Navbar';
import Sidebar from '../layouts/Sidebar'
import DashBody from './Index';
import Invite from './ManageEmployee';

import AcceptedTasks from './employeeTasks/AcceptedTasks';
import EmployeeTasks from './employeeTasks/EmployeeTasks';

import Footer from '../layouts/Footer';

{/* <div>
    <Navbar  />
    <div className="d-flex align-items-stretch">
        <Sidebar />
            <div className="page-holder w-100 d-flex flex-wrap">

                <DashBody />
                <Invite />
                <AcceptedTasks />
                <EmployeeTasks />
            <Footer />
            </div>
    </div>
    
</div> */}
class Dashboard extends Component{
    render(){
        return(
            <>
                <div>
                  {/* >>>>>>>>>>>>>>> NAVBAR COMPONENT SECTION <<<<<<<<<<<<<< */}
                    <Navbar  />
                        <div className="d-flex align-items-stretch">
                  {/* >>>>>>>>>>>>>>> SIDEBAR COMPONENT SECTION <<<<<<<<<<<<<< */}
                            <Sidebar />
                            <div className="page-holder w-100 d-flex flex-wrap">
                                <div className="container-fluid px-xl-5">
                  {/* >>>>>>>>>>>>>>> BODIES COMPONENTS SECTION <<<<<<<<<<<<<< */}
                                    <DashBody />
                                    {/* <AcceptedTasks /> */}
                                    {/* <EmployeeTasks /> */}
                                </div>
                  {/* >>>>>>>>>>>>>>> FOOTER COMPONENT SECTION <<<<<<<<<<<<<< */}
                            <Footer />
                        </div>
                        </div>
                </div>
            </>
        )
    }
}


export default Dashboard;