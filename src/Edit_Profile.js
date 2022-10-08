import React from 'react'

function Edit_Profile() {
  return (
    <div className='container'>
            <div className="row">
                <div className='col-lg-6'>
                    <div className='form-group'><lable>Name</lable><input className='form-control' type={"text"} /></div>
                </div>
                <div className='col-lg-6'>
                    <div className='form-group'><lable>Email</lable><input className='form-control' type={"email"} /></div>
                </div>
                <div className='col-lg-4'>
                    <div className='form-group'><lable>Country</lable>
                        <select className='form-control'>
                            <option>INDIA</option>
                            <option>US</option>
                            <option>CHINA</option>
                        </select>
                    </div>
                </div>
                <div className='col-lg-4'>
                    <div className='form-group'><lable>State</lable>
                        <select className='form-control'>
                            <option>TN</option>
                            <option>MH</option>
                            <option>PN</option>
                        </select>
                    </div>
                </div>
                <div className='col-lg-4'>
                    <div className='form-group'><lable>City</lable>
                        <select className='form-control'>
                            <option>MADURAI</option>
                            <option>CHENNAI</option>
                            <option>COIMBATORE</option>
                        </select>
                    </div>
                </div>
                <div className='col-lg-4'>
                <div className='form-group'><lable>PhoneNo</lable><input className='form-control' type={"number"} /></div>   
                </div>
                <div className='col-lg-4'>
                <div className='form-group'><lable>DOB</lable><input className='form-control' type={"date"} /></div>
                </div>
                <div className='col-lg-4'>
                <div className='form-group'><lable>Gender</lable>
                <select className='form-control'>
                            <option>female</option>
                            <option>male</option>
                        </select>
                </div>
                </div>
                <div className='col-lg-4'>
                <div className='form-group'>
                    <input className='btn btn-primary' type={"submit"} />
                    </div>   
                </div>
                
            </div>
        </div >
  )
}

export default Edit_Profile