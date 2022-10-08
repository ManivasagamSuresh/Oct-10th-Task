import React from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

function View_User() {
    const params = useParams()
    return (
        <div className='container'>
            <div className='row'>
                <h5>Id: {params.id}</h5>
                <div className='col-lg-6'>
                    name : mani
                </div>
                <div className='col-lg-6'>
                    mail : 123@gmail.com
                </div>
                <div className='col-lg-6'>
                    country : india
                </div>
                <div className='col-lg-6'>
                    state : Tn
                </div>
                <div className='col-lg-6'>
                    city : madurai
                </div>
                <div className='col-lg-6'>
                    ph : 7418529631
                </div>
                <div className='col-lg-6'>
                    DOB : 12/10/1998
                </div>
                <div className='col-lg-6'>
                    gender: male
                </div>
                <td>
                    <Link className='btn btn-primary ms-3' to={`/editprofile`}>Edit Profile</Link>
                </td>
            </div>
        </div>
    )
}

export default View_User