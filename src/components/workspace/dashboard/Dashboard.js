// React
import { React, Component } from 'react';
import { Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';

// Layouts
import Navbar from '../layouts/Navbar';
import Sidebar from '../layouts/Sidebar'
import Footer from '../layouts/Footer';

// Components
import Index from './Index';
import AddEmployee from './AddEmployee';
import EditEmployee from './EditEmployee';
import EmployeeTasks from './employeeTasks/EmployeeTasks';


class Dashboard extends Component{
    render(){
        return(
            <>
                <div>
                   {/* >>>>> NAVBAR COMPONENT SECTION <<<<< */}
                    <Navbar  />
                        <div className="d-flex align-items-stretch">
                   {/* >>>>> SIDEBAR COMPONENT SECTION <<<<< */}
                            <Sidebar />
                            <div className="page-holder w-100 d-flex flex-wrap">

                                <div className="container-fluid px-xl-1">
                   {/* >>>>> BODIES COMPONENTS SECTION <<<<< */}
                                    <Switch>
                                        <Route exact path="/dashboard/task" component={EmployeeTasks} />
                                        <Route exact path="/dashboard/employ" component={AddEmployee} />
                                        <Route exact path="/dashboard/edit" component={EditEmployee} />
                                        <Route exact path="/dashboard" component={Index} />
                                    </Switch>
                                </div>
                   {/* >>>>> FOOTER COMPONENT SECTION <<<<< */}
                            <Footer />
                        </div>
                    </div>
                </div>

            </>
        )
    }
}


export default Dashboard;