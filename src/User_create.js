import axios from 'axios';
import { useFormik } from 'formik'
import React from 'react'

function User_create() {
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            country: '',
            state: '',
            city: '',
            phone: '',
            DOB: '',
            gender: '',

        },
        validate: (values) => {
            let error = {};

            if (!values.name) {
                error.name = "please enter the Name"
            }
            if ((values.name) && (values.name.length <= 2 || values.name.length > 15)) {
                error.name = "Username must be between 3 to 15"
            }
            if (!values.email) {
                error.email = 'please enter Email'
            }
            if ((values.email) && (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email))) {
                error.email = "please enter a valid Email"
            }

            if (!values.phone) {
                error.phone = 'please enter your Phone Number'
            }
            if (values.phone.toString().length !== 10) {
                error.phone = 'please enter a valid Phone Number'
            }
            // console.log(values.DOB);
            // console.log(values.DOB.split('-'));
            console.log(values.DOB.split('-')[0]);
            console.log(new Date().getFullYear());
            let age = new Date().getFullYear() - +values.DOB.split('-')[0];
            console.log(age);
            if (age < 18) {
                error.DOB = "you must be above 18"
            }
            return error;
        },
        onSubmit: async (values) => {
            try {
                console.log(values);
                const userdata = await axios.post('https://63450500dcae733e8fe7f213.mockapi.io/users', values)
                alert('Success')
            }
            catch (error) {
                alert("Error")
            }
        },

    });
    return (
        <div className='container'>
            <form onSubmit={formik.handleSubmit}>
                <div className="row">
                    <div className='col-lg-6'>
                        <div className='form-group'>
                            <lable>Name</lable>
                            <input name="name"
                                onChange={formik.handleChange}
                                value={formik.values.name}
                                onBlur={formik.handleBlur}
                                className={`form-control ${formik.touched.name && formik.errors.name ? "error-box" : ""} ${formik.touched.name && !formik.errors.name ? "success-box" : ''}`}

                                type={"text"} />
                            {
                                formik.touched.name && formik.errors.name ? <span style={{ color: "red" }}>{formik.errors.name}</span> : null
                            }
                        </div>
                    </div>
                    <div className='col-lg-6'>
                        <div className='form-group'><lable>Email</lable>
                            <input name='email'
                                onChange={formik.handleChange}
                                value={formik.values.email}
                                onBlur={formik.handleBlur}
                                className={`form-control ${formik.touched.email && formik.errors.email ? "error-box" : ""} ${formik.touched.email && !formik.errors.email ? "success-box" : ''}`}
                                type={"email"} />
                            {
                                formik.touched.email&&formik.errors.email ? <span style={{ color: "red" }}>{formik.errors.email}</span> : null
                            }
                        </div>
                    </div>
                    <div className='col-lg-4'>
                        <div className='form-group' name='country' onChange={formik.handleChange} value={formik.values.country}><lable>Country</lable>
                            <select className='form-control'>
                                <option>INDIA</option>
                                <option>US</option>
                                <option>CHINA</option>
                            </select>
                        </div>
                    </div>
                    <div className='col-lg-4'>
                        <div className='form-group'><lable>State</lable>
                            <select name='state' onChange={formik.handleChange} value={formik.values.state} className='form-control'>
                                <option>TN</option>
                                <option>MH</option>
                                <option>PN</option>
                            </select>
                        </div>
                    </div>
                    <div className='col-lg-4'>
                        <div className='form-group'><lable>City</lable>
                            <select name='city' onChange={formik.handleChange} value={formik.values.city} className='form-control'>
                                <option>MADURAI</option>
                                <option>CHENNAI</option>
                                <option>COIMBATORE</option>
                            </select>
                        </div>
                    </div>
                    <div className='col-lg-4'>
                        <div className='form-group'>
                            <lable>PhoneNo</lable>
                            <input name='phone'
                                onChange={formik.handleChange}
                                value={formik.values.phone}
                                onBlur={formik.handleBlur}
                                className={`form-control ${formik.touched.phone && formik.errors.phone ? "error-box" : ""} ${formik.touched.phone && !formik.errors.phone ? "success-box" : ''}`}
                                type={"number"} />
                            {
                                formik.touched.phone&&formik.errors.phone ? <span style={{ color: "red" }}>{formik.errors.phone}</span> : null
                            }
                        </div>
                    </div>
                    <div className='col-lg-4'>
                        <div className='form-group'>
                            <lable>DOB</lable>
                            <input name='DOB'
                                onChange={formik.handleChange}
                                value={formik.values.DOB}
                                onBlur={formik.handleBlur}
                                max={"2004-01-01"}
                                className={`form-control ${formik.touched.DOB && formik.errors.DOB ? "error-box" : ""} ${formik.touched.DOB && !formik.errors.DOB ? "success-box" : ''}`}
                                type={"date"} />
                            {
                                formik.touched.DOB&&formik.errors.DOB ? <span style={{ color: "red" }}>{formik.errors.DOB}</span> : null
                            }
                        </div>
                    </div>
                    <div className='col-lg-4'>
                        <div className='form-group'><lable>Gender</lable>
                            <select name='gender' onChange={formik.handleChange} value={formik.values.gender} className='form-control'>
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
            </form>
        </div >
    )
}

export default User_create