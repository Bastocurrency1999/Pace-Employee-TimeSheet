// React
import axios from 'axios';
import { ErrorMessage, Form, Formik,Field } from 'formik';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import Button from '../../layouts/Button';
import { TextInput } from '../../layouts/FormInput';
import { useDispatch, useSelector } from 'react-redux';
import { USER_PROFILE_URL } from '../../../services/root-endpoints';
import { authHeader } from '../../../services/auth-header';
import { Link } from 'react-router-dom';
import { getCompanyEmployees } from '../../../actions/employee/employeeAction';
import { getDepartment } from '../../../actions/company/department/departmentAction';


const employeeDetailsDropDown = {
    employeeRole: [
        {
            roleName: 'Super-Admin',
            roleID: 1
        },
        {
            roleName: 'Co-Admin',
            roleID: 3
        },
        {
            roleName: 'Internal-Admin',
            roleID: 4
        },
        {
            roleName: 'Employee',
            roleID: 5
        }

    ],
}
const availableRole = employeeDetailsDropDown.employeeRole.map(({roleName, roleID}, index)=><option value={roleID} key={index}>{roleName}</option>);

const UpdateEmployeeProfile = () =>{
    
    const params = useParams()
    const { employees, isFetching } = useSelector(state => state.employees);
    const { departments } = useSelector(state => state.departments)
    const dispatch = useDispatch();
    const [employeeProfile, setEmployeeProfile] = useState({
        firstName: '',
        lastName: '',
        phoneNumber: '',
        email: '',
        address: '',
        userName: '',
    })
    
    
    const companyDepartmentDropDown = departments.map(({departmentName, departmentID}, index)=><option value={departmentID} key={index}>{departmentName}</option>)
    useEffect(() => {
        dispatch(getCompanyEmployees())
        // Fetch company department
        dispatch(getDepartment())

    }, [])
console.log(employeeProfile)
useEffect(() => {
    const getEmployeeProfile = employees.filter((employee)=>employee.staffID === parseInt(params.id))
    console.log(employees);
    if(getEmployeeProfile.length > 0){
            setEmployeeProfile(getEmployeeProfile[0])
            const {
                firstName,
                lastName,
                phoneNumber,
                email,
                address,
                userName,
                billRateCharge,
                expectedWorkHours,
                staffRole,
                roleID,
                departmentID
            } = getEmployeeProfile[0]
        
            // Set the destructure user information into the profile state (ES6 syntax)
            setEmployeeProfile({
                firstName,
                lastName,
                phoneNumber,
                email,
                address,
                userName,
                billRateCharge,
                expectedWorkHours,
                phoneNumber,
                staffRole,
                roleID,
                departmentID
            })
        }else{
            
        }
    }, [employees, params.id])
    // if(employeeProfile === undefined){
    //     return(
    //         <>
    //             {/* <Loader /> */}
    //         </>
    //     )
    // }
    return ( 
        <>
            <div className="container">
                {/* Breadcrumb */}
                <nav aria-label="breadcrumb" className="main-breadcrumb mt-2">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item" aria-current="page">
                                <Link to='/dashboard/employee-list' className="text-grey">
                                        Employee List
                                </Link>
                            </li>
                            <li className="breadcrumb-item" aria-current="page">
                                <Link to={`/dashboard/employee/profile/${params.id}`} className="text-grey">
                                        Profile
                                </Link>
                            </li>
                        <li className="breadcrumb-item active" aria-current="page">Edit Profile</li>
                        </ol>
                    </nav>
                    
                    {/* /Breadcrumb */}
                <style>
                    {
                        `
                        .dashboard-body-wrapper, .page-holder{
                            background: #e9ecef;
                        }
                        `
                    }
                </style>
                <div className="main-body">
                    <div className="col-md-12">
                        <div className="card mb-3">
                            <div className="card-body">
                                <Formik
                                    initialValues = {employeeProfile}
                                    enableReinitialize
                                    // validationSchema={UpdateEmployeeProfileSchema}
                                    onSubmit={(values, action)=>{
                                        // dispatch(updateUserProfile(values, staffID, action));
                                    }
                                    }
                                >
                                    { (({ values, touched, errors, handleSubmit, isSubmitting, resetForm })=>{
                                        return <Form onSubmit={handleSubmit}>
                                            <div className="mb-5 text-gray">
                                                <pre>{JSON.stringify(values, null, 2)}</pre>
                                                <h5>EDIT EMPLOYEE PROFILE</h5>
                                            </div>
                                            <hr />

                                            {/* FIRST NAME */}
                                            <div className="row">
                                                <div className="col-sm-6 col-md-3">
                                                    <h6 className="mb-0">First Name</h6>
                                                </div>
                                                <div className="col-sm-12 col-md-9 text-secondary" >
                                                    <TextInput
                                                        name="firstName"
                                                        id="firstName"
                                                        placeholder="Enter Firstname"
                                                        type="text" 
                                                        className={`form-control ${ touched.firstName && errors.firstName ? "is-invalid" : ""}`} 
                                                        />
                                                    <ErrorMessage
                                                        component="div"
                                                        name="firstName"
                                                        className="invalid-feedback p-0"
                                                        />
                                                </div>
                                            </div>
                                            <hr />

                                            {/* LAST NAME */}
                                            <div className="row">
                                                <div className="col-sm-6 col-md-3">
                                                    <h6 className="mb-0">Last Name</h6>
                                                </div>
                                                <div className="col-sm-12 col-md-9 text-secondary" >
                                                    <TextInput
                                                        name="lastName"
                                                        placeholder="Enter lastname"
                                                        type="text" 
                                                        className={`form-control ${touched.lastName && errors.lastName ? "is-invalid" : ""}`} 
                                                        id="lastName"
                                                    />
                                                    <ErrorMessage
                                                        component="div"
                                                        name="lastName"
                                                        className="invalid-feedback p-0"
                                                    />
                                                </div>
                                            </div>
                                            <hr />

                                            {/* USERNAME */}
                                            <div className="row">
                                                <div className="col-sm-6 col-md-3">
                                                    <h6 className="mb-0">Username</h6>
                                                </div>
                                                <div className="col-sm-12 col-md-9 text-secondary" >
                                                    <TextInput
                                                        name="userName"
                                                        placeholder="Enter username"
                                                        type="text" 
                                                        className={`form-control ${touched.userName && errors.userName ? "is-invalid" : ""}`} 
                                                        id="userName"
                                                    />
                                                    <ErrorMessage
                                                        component="div"
                                                        name="userName"
                                                        className="invalid-feedback p-0"
                                                    />
                                                </div>
                                            </div>
                                            <hr />
                                            
                                            {/* EXPECTED WORK HOUR */}
                                            <div className="row">
                                                <div className="col-sm-6 col-md-3">
                                                    <h6 className="mb-0">Expected Work Hour</h6>
                                                </div>
                                                <div className="col-sm-12 col-md-9 text-secondary" >
                                                    <TextInput
                                                        name="expectedWorkHours"
                                                        placeholder="Enter expectedWorkHours"
                                                        type="text" 
                                                        className={`form-control ${touched.expectedWorkHours && errors.expectedWorkHours ? "is-invalid" : ""}`} 
                                                        id="expectedWorkHours"
                                                    />
                                                    <ErrorMessage
                                                        component="div"
                                                        name="expectedWorkHours"
                                                        className="invalid-feedback p-0"
                                                    />
                                                </div>
                                            </div>
                                            <hr />

                                            {/* BILL RATE CHARGE */}
                                            <div className="row">
                                                <div className="col-sm-6 col-md-3">
                                                    <h6 className="mb-0">Bill Rate Charge</h6>
                                                </div>
                                                <div className="col-sm-12 col-md-9 text-secondary" >
                                                    <TextInput
                                                        name="billRateCharge"
                                                        placeholder="Enter Bill Rate Charge"
                                                        type="text" 
                                                        className={`form-control ${touched.billRateCharge && errors.billRateCharge ? "is-invalid" : ""}`} 
                                                        id="billRateCharge"
                                                    />
                                                    <ErrorMessage
                                                        component="div"
                                                        name="billRateCharge"
                                                        className="invalid-feedback p-0"
                                                    />
                                                </div>
                                            </div>
                                            <hr />

                                            {/* PHONE NUMBER */}
                                            <div className="row">
                                                <div className="col-sm-6 col-md-3">
                                                    <h6 className="mb-0">Phone Number</h6>
                                                </div>
                                                <div className="col-sm-12 col-md-9 text-secondary" >
                                                    <TextInput
                                                        name="phone"
                                                        placeholder="Enter Phone Number"
                                                        type="tel" 
                                                        className={`form-control ${touched.phone && errors.phone ? "is-invalid" : ""}`} 
                                                        id="phone"
                                                    />
                                                    <ErrorMessage
                                                        component="div"
                                                        name="phone"
                                                        className="invalid-feedback p-0"
                                                    />
                                                </div>
                                            </div>
                                            <hr />

                                            {/* EMAIL ADDRESS */}
                                            <div className="row">
                                                <div className="col-sm-6 col-md-3">
                                                    <h6 className="mb-0">Email Address</h6>
                                                </div>
                                                <div className="col-sm-12 col-md-9 text-secondary" >
                                                    <TextInput
                                                        name="email"
                                                        placeholder="Enter Valid Email Address"
                                                        type="text" 
                                                        className={`form-control ${touched.email && errors.email ? "is-invalid" : ""}`} 
                                                        id="email"
                                                    />
                                                    <ErrorMessage
                                                        component="div"
                                                        name="email"
                                                        className="invalid-feedback p-0"
                                                    />
                                                </div>
                                            </div>
                                            <hr />

                                            {/* CREATE PASSWORD */}
                                            <div className="row">
                                                <div className="col-sm-6 col-md-3">
                                                    <h6 className="mb-0">New Password</h6>
                                                </div>
                                                <div className="col-sm-12 col-md-9 text-secondary" >
                                                    <TextInput
                                                        name="password"
                                                        placeholder="New Password"
                                                        type="password" 
                                                        className={`form-control ${ touched.password && errors.password ? "is-invalid" : ""}`} 
                                                        id="password"
                                                    />
                                                    <ErrorMessage
                                                        component="div"
                                                        name="password"
                                                        className="invalid-feedback p-0"
                                                    />
                                                </div>
                                            </div>
                                            <hr />

                                            {/* CONFIRM PASSWORD */}
                                            <div className="row">
                                                <div className="col-sm-6 col-md-3">
                                                    <h6 className="mb-0">Confirm Password</h6>
                                                </div>
                                                <div className="col-sm-12 col-md-9 text-secondary" >
                                                    <TextInput
                                                        name="password2"
                                                        placeholder="Confirm Password"
                                                        type="password" 
                                                        className={`form-control ${ touched.password2 && errors.password2 ? "is-invalid" : ""}`} 
                                                        id="password2"
                                                    />
                                                    <ErrorMessage
                                                        component="div"
                                                        name="password2"
                                                        className="invalid-feedback p-0"
                                                    />
                                                </div>
                                            </div>
                                            <hr />

                                            {/* ADDRESS */}
                                            <div className="row">
                                                <div className="col-sm-6 col-md-3">
                                                    <h6 className="mb-0">Address</h6>
                                                </div>
                                                <div className="col-sm-12 col-md-9 text-secondary" >
                                                    <TextInput
                                                        name="address"
                                                        id="address"
                                                        type="text" 
                                                        placeholder="143 work and connect"
                                                        className={`form-control ${touched.address && errors.address ? "is-invalid" : ""}`}
                                                    />
                                                    <ErrorMessage
                                                        component="div"
                                                        name="address"
                                                        className="invalid-feedback p-0"
                                                    />
                                                </div>
                                            </div>
                                            <hr />

                                            {/* Role */}
                                            <div className="row">
                                                <div className="col-sm-6 col-md-3">
                                                    <h6 className="mb-0">Role</h6>
                                                </div>
                                                <div className="col-sm-12 col-md-9 text-secondary" >
                                                    <Field component="select" name="roleID" className="form-control">
                                                        <option selected>Choose...</option>
                                                        {availableRole}
                                                    </Field>
                                                    <ErrorMessage
                                                        component="div"
                                                        name="roleID"
                                                        className="invalid-feedback p-0"
                                                    />
                                                </div>
                                            </div>
                                            <hr />



                                            {/* EMPLOYEE POSITION */}
                                            <div className="row">
                                                <div className="col-sm-6 col-md-3">
                                                    <h6 className="mb-0">Position</h6>
                                                </div>
                                                <div className="col-sm-12 col-md-9 text-secondary" >
                                                    <TextInput
                                                        name="staffRole"
                                                        placeholder="Enter Position"
                                                        type="text" 
                                                        className={`form-control ${touched.staffRole && errors.staffRole ? "is-invalid" : ""}`} 
                                                        id="staffRole"
                                                    />
                                                    <ErrorMessage
                                                        component="div"
                                                        name="staffRole"
                                                        className="invalid-feedback p-0"
                                                    />
                                                </div>
                                            </div>
                                            <hr />
                                           
                                            {/* DEPARTMENT */}
                                            <div className="row">
                                                <div className="col-sm-6 col-md-3">
                                                    <h6 className="mb-0">Department</h6>
                                                </div>
                                                <div className="col-sm-12 col-md-9 text-secondary" >
                                                    <Field component="select" name="departmentID" className="form-control">
                                                        <option selected>Choose...</option>
                                                        {companyDepartmentDropDown}
                                                    </Field>
                                                    <ErrorMessage
                                                        component="div"
                                                        name="departmentID"
                                                        className="invalid-feedback p-0"
                                                    />
                                                </div>
                                            </div>
                                            <hr />
                                            
                                            <div className="d-flex justify-content-between">
                                                <Button 
                                                    type="submit" 
                                                    label={isSubmitting ? (<span><i className="fa fa-spinner fa-spin"></i> Updating...</span>) : "Update"}
                                                    className="btn pace-btn-primary" 
                                                />
                                                <Button 
                                                    type="submit" 
                                                    className="btn pace-btn-accent d-none" 
                                                    label={isSubmitting ? (<span><i className="fa fa-spinner fa-spin"></i> Please wait...</span>) : "Reset"}
                                                    onClick={(()=>resetForm())} 
                                                />
                                            </div>
                                        </Form>
                                    })
                                }
                                </Formik>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UpdateEmployeeProfile;
