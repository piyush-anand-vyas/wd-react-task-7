import React from 'react'
import axios from "axios";
import { Formik } from 'formik';
import * as Yup from 'yup';

export default function AddUser() {


    const handleSubmitButton = (e) => {
        e.preventDefault();
        let url = "https://618d10c3edab980017fd51ad.mockapi.io/api/v1/userList";
        axios.post(url, {
            name: document.getElementById("name").value,
            email: document.getElementById("email").value,
            mobile_number: document.getElementById("mobile").value,
        })
            .then((response) => alert("User Added"))
            .catch((err) => alert(err));

        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("mobile").value = "";
    }
    const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

    return (
        <>
            <Formik
                initialValues={{
                    name: "",
                    email: "",
                    mobile: ""
                }}

                validationSchema={Yup.object({
                    name: Yup.string()
                        .min(3, "Must be at least 3 characters")
                        .max(20, "Must be 20 characters or less")
                        .required('Required'),
                    email: Yup.string()
                        .email("Invalid Email")
                        .required("Required"),
                    mobile: Yup.string()
                        .required("Required")
                        .matches(phoneRegExp, 'Phone number is not valid')
                        .min(10, "to short")
                        .max(10, "to long")

                })}
                onSubmit={(values) => {
                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                    }, 3000)
                }}
            >

                {({
                    handleChange,
                    values,
                    errors,
                    handleBlur,
                    touched
                }) => {
                    console.log(errors, touched);
                    return (
                        <div className="container">
                            <h1 className="text-center my-3">Add User</h1>
                            <form onSubmit={handleSubmitButton} id="addUserForm">                                
                                <div className="form-group">
                                    <input type="name" name="name" value={values.name} onBlur={handleBlur} className={`form-control ${errors.name && touched.name ? "is-invalid" : ""}`} id="name" placeholder="Name" onChange={handleChange} />
                                </div>
                                {errors.name && touched.name && <p className="ml-2" style={{color:"#e02d1b", fontSize:"14px"}}> {errors.name} </p>}
                                <div className="form-group">
                                    <input type="text" name="email" value={values.email} onBlur={handleBlur} className={`form-control ${errors.email && touched.email ? "is-invalid" : ""}`} id="email" placeholder="Email" onChange={handleChange} />
                                </div>
                                {errors.email && touched.email && <p className="ml-2" style={{color:"#e02d1b", fontSize:"14px"}}> {errors.email} </p>}
                                <div className="form-group">
                                    <input type="text" name="mobile" value={values.mobile} onBlur={handleBlur} className={`form-control ${errors.mobile && touched.mobile ? "is-invalid" : ""}`} id="mobile" placeholder="Mobile" onChange={handleChange} />
                                </div>
                                {errors.mobile && touched.mobile && <p className="ml-2" style={{color:"#e02d1b", fontSize:"14px"}}> {errors.mobile} </p>}
                                <button type="submit" className="btn btn-primary mr-3">Add User</button>
                                
                                <button type="reset" className="btn btn-danger">Reset</button>
                            </form>
                        </div>
                    )
                }}
            </Formik>



            {/* <div className="container">
            <h1 className="text-center my-3">Add User</h1>
            <form onSubmit={handleSubmitButton} id="addUserForm"> 
                <div className="form-group">
                    <input type="name" name="name" value={name} className="form-control" id="name" placeholder="Name" onChange = {(event) => setName(event.target.value)}/>
                </div>
                <div className="form-group">
                    <input type="email" name="email" value={email} className="form-control" id="email" placeholder="Email" onChange = {(event) => setEmail(event.target.value)}/>
                </div>
                <div className="form-group">
                    <input type="mobile" name="mobile_number" value={mobile_number} className="form-control" id="mobile_number" placeholder="Mobile" onChange = {(event) => setMobileNumber(event.target.value)}/>
                </div>
                <button type="submit" className="btn btn-primary">Add User</button>
                <button type="reset" className="btn btn-danger mx-3">Reset</button>
            </form>
        </div> */}
        </>
    )
}
