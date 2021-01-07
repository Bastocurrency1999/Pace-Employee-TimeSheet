// React
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useHistory, useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { syncCurrentUser } from '../../../actions/auth/authAction';
import Button from '../../layouts/Button';
import unclebay from '../../pages/pages-images/ayodele_samuel_adebayo.jpg';



const ProfileRow = (props) => {
    const { title, label } = props
    return(
        <>
            <div className="row">
                <div className="col-sm-3">
                <h6 className="mb-0">{title}</h6>
                </div>
                <div className="col-sm-9 text-secondary">
                    {label}
                </div>
            </div>
            <hr />
        </>
    )
}



const Profile = () =>{
    const params = useParams()
    const [ user, setUser ] = useState({})
    const history = useHistory()
    
    useEffect(() => {
        
        const getCurrentUser = JSON.parse(localStorage.getItem('token'));
        if(getCurrentUser){
            // history.push('../login')
            const currentUser = getCurrentUser.response[0];
            setUser(currentUser)
            console.log(params.id)
            syncCurrentUser(params.id)
            // console.log(user)
        }

        return(()=>{
            console.log('here1')
            const currentUser = []
            console.log('here2')
        })
    }, [])
    
    useEffect(() => {
        // const getUser = async() =>{
        //     const getCurrentUser = JSON.parse(localStorage.getItem('token'));
        //     const accessToken1 = getCurrentUser.data.accessToken
        //     const options = {
        //         'Content-Type': 'application/json',
        //         'Authorization': `basic ${accessToken1} `
        //       }
        //     // const { data } = await axios.get('https://pacetimesheet.herokuapp.com/api/users/companyName/userProfile/' + params.id)
        //     console.log("response")
        //     const { data } = await axios.get('https://pacetimesheet.herokuapp.com/api/users/companyName/userProfile/' + user.staffID, { headers: authHeader })
        //     console.log(data)
        //     // setUser(data)
        //     // setUser(data)
        // }
        // getUser()
    },[])
    return (
        <>
            <div className="container">
                <style jsx>
                    {
                        `
                        .dashboard-body-wrapper, .page-holder{
                            background: #e9ecef;
                        }
                        `
                    }
                </style>
                <div className="main-body">
                    {/* Breadcrumb */}
                    <nav aria-label="breadcrumb" className="main-breadcrumb">
                        <ol className="breadcrumb">
                        <li className="breadcrumb-item active" aria-current="page"></li>
                        </ol>
                    </nav>
                    
                    {/* /Breadcrumb */}
                    <div className="row gutters-sm mt-4">
                        <div className="col-md-4 mb-3">
                            <div className="card">
                                <div className="card-body">
                                    <div className="d-flex flex-column align-items-center text-center">
                                        {/* <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Admin" className="rounded-circle" width={150} /> */}
                                        <img src={unclebay} alt="Admin" className="rounded-circle" width={150} />
                                        <div className="mt-3">
                                            <h4 className="text-capitalize">{user.firstName} {user.lastName}</h4>
                                            <h4>{user.id} </h4>
                                            <p className="text-secondary mb-1">Frontend Engineer</p>
                                            <p className="text-muted font-size-sm">{user.address}</p>
                                            <Link to={`/dashboard/edit/${user.staffID}`}><Button className="btn btn-primary mr-2" label="Edit"/></Link>
                                            <Button className="btn btn-danger" label="Disable" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-8">
                            <div className="card mb-3">
                                <div className="card-body">
                                    <ProfileRow title="Full Name" label={ ` ${user.firstName} ${user.lastName}` } />
                                    <ProfileRow title="Email" label={user.email} />
                                    <ProfileRow title="Department" label="Web development" />
                                    <ProfileRow title="Role" label="Frontend Engineer" />
                                    <ProfileRow title="Salary" label={`# ${user.billRateCharge}`} />
                                    <ProfileRow title="Phone" label={user.phoneNumber} />
                                    <ProfileRow title="Address" label={user.address} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Profile;
