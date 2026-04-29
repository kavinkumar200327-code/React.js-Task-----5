// import React,{useState} from 'react'

// export default function Newregform() {
//     const [formData,setFormData] = useState({
//         Name:"",
//         Email:"",
//         PhoneNumber:"",
//         Password:"",
//         ConfirmPassword:"",
//         Address:"",
//         City:"",
//         State:"",
//         Country:"",
//         ZipCode:"",
//     })
//     const [error,setError] = useState();
    
//     const handleChange = (e) => {
//         const {name,value} = e.target;
//         setFormData({
//             ...formData,
//             [name]:value
//         })
//     };

//     const validate = () => {
//     const newError = {};

//         if (!formData.Email) {
//         newError.Email = "Email is required";
//         } else if (!/\S+@\S+\.\S+/.test(formData.Email)) {
//         newError.Email = "Invalid email format";
//         }

//         if (!formData.PhoneNumber) {
//         newError.PhoneNumber = "Phone number is required";
//         } else if (!/^\d{10}$/.test(formData.PhoneNumber)) {
//         newError.PhoneNumber = "Phone must be 10 digits";
//         }

//         if (!formData.Password) {
//         newError.Password = "Password is required";
//         } else if (formData.Password.length < 6) {
//         newError.Password = "Password must be at least 6 characters";
//         }

//         if (formData.ConfirmPassword !== formData.Password) {
//         newError.ConfirmPassword = "Passwords do not match";
//         }

//         return newError;
//         };
        
//         const handleSubmit = (e) => {
//         e.preventDefault();
//         // console.log("Hello")
//         const validationErrors = validate();
//         setError(validationErrors);

//         if (Object.keys(validationErrors).length === 0) {
//         alert("Form submitted successfully!");
//         }
//     }

// return (
// <div>
//     <form onSubmit={handleSubmit}>
//         <h2>Registration Form</h2>
//         {error && <h3>{error}</h3>}
//         <label htmlFor="">Name </label>
//         <input className='name' type="name"
//         name='Name'
//         value={formData.Name}
//         onChange={handleChange}
//         placeholder='Enter your Name'
//         /> <br/>
        
//         <label htmlFor="">Email </label>
//         <input className='email' type="email"
//         name='Email'
//         value={formData.Email}
//         onChange={handleChange}
//         placeholder='Enter your Email'
//         /> <br/>

//         <label htmlFor="">PhoneNumber </label>
//         <input className='number' type="number"
//         name='PhoneNumber'
//         value={formData.PhoneNumber}
//         onChange={handleChange}
//         placeholder='Enter your Number'
//         /> <br/>

//         <label htmlFor="">Password </label>
//         <input className='password' type="password"
//         name='Password'
//         value={formData.Password}
//         onChange={handleChange}
//         placeholder='Enter your Password'
//         /> <br/>

//         <label htmlFor="">ConfirmPassword </label>
//         <input className='confirmPassword' type="password"
//         name='ConfirmPassword'
//         value={formData.ConfirmPassword}
//         onChange={handleChange}
//         placeholder='Enter your ConfirmPassword'
//         /> <br/>

//         <label htmlFor="">Address </label>
//         <input className='address' type="text"
//         name='Address'
//         value={formData.Address}
//         onChange={handleChange}
//         placeholder='Enter your Address'
//         /> <br/>

//         <label htmlFor="">City </label>
//         <input className='city' type="text"
//         name='City'
//         value={formData.City}
//         onChange={handleChange}
//         placeholder='Enter your City'
//         /> <br/>

//         <label htmlFor="">State </label>
//         <input className='state' type="text"
//         name='State'
//         value={formData.State}
//         onChange={handleChange}
//         placeholder='Enter your State'
//         /> <br/>

//         <label htmlFor="">Country </label>
//         <input className='country' type="text"
//         name='Country'
//         value={formData.Country}
//         onChange={handleChange}
//         placeholder='Enter your Country'
//         /> <br/>

//         <label htmlFor="">ZipCode </label>
//         <input className='zipcode' type="text"
//         name='ZipCode'
//         value={formData.ZipCode}
//         onChange={handleChange}
//         placeholder='Enter your ZipCode'
//         /> <br/>
//         <button type='submit'>Submit</button>
//     </form>
// </div>
//     );
// }

import React, { useState } from "react";
import "./Regform.css";

export default function Newregform() {
    const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    address: "",
    city: "",
    state: "",
    country: "",
    zip: "",
    });

    const [errors, setErrors] = useState({});


    const handleChange = (e) => {
        const {name,value} = e.target;
    setFormData({
        ...formData,
        [name]:value
    });
    };


    const validate = () => {
    let newErrors = {};


    if (!formData.email) {
        newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        newErrors.email = "Invalid email format";
    }


    if (!formData.phone) {
        newErrors.phone = "Phone number is required";
    } else if (!/^\d{10}$/.test(formData.phone)) {
        newErrors.phone = "Phone must be 10 digits";
    }


    if (!formData.password) {
        newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
        newErrors.password = "Password must be at least 6 characters";
    }

    if (formData.confirmPassword !== formData.password) {
        newErrors.confirmPassword = "Passwords do not match";
    }

    return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    const validationErrors = validate();
        setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
        alert("Form submitted successfully!");
    }
    };

    return (
    <div className="container">
        <h2>Form Validation</h2>
        <form onSubmit={handleSubmit}>
        
        <label htmlFor="">Name: </label>
        <input type="text" className="name"
        name="name"
        placeholder="Enter your Name"
        onChange={handleChange} />
        <span>{errors.name}</span><br/>

        <label htmlFor="">Email: </label>
        <input type="email" className="email"
        name="email"
        placeholder="Enter your Email"
        onChange={handleChange} />
        <span>{errors.email}</span><br/>

        <label htmlFor="">Phone Number: </label>
        <input type="text" className="number"
        name="phone"
        placeholder="Enter your Phone Number"
        onChange={handleChange} />
        <span>{errors.phone}</span><br/>

        <label htmlFor="">Password: </label>
        <input type="password" className="password"
        name="password"
        placeholder="Enter your Password"
        onChange={handleChange} />
        <span>{errors.password}</span><br/>

        <label htmlFor="">Confirm Password: </label>
        <input type="password" className="confirmPassword"
        name="confirmPassword"
        placeholder="Enter your Confirm Password"
        onChange={handleChange} />
        <span>{errors.confirmPassword}</span><br/>

        <label htmlFor="">Address: </label>
        <input type="text" className="address"
        name="address"
        placeholder="Enter your Address"
        onChange={handleChange} />
        <span>{errors.address}</span><br/>

        <label htmlFor="">City: </label>
        <input type="text" className="city"
        name="city"
        placeholder="Enter your City"
        onChange={handleChange} />
        <span>{errors.city}</span><br/>

        <label htmlFor="">State: </label>
        <input type="text" className="state"
        name="state"
        placeholder="Enter your State"
        onChange={handleChange} />
        <span>{errors.state}</span><br/>

        <label htmlFor="">Country: </label>
        <input type="text" className="country"
        name="country"
        placeholder="Enter your Country"
        onChange={handleChange} />
        <span>{errors.country}</span><br/>

        <label htmlFor="">Zip Code: </label>
        <input type="text" className="zipcode"
        name="zip"
        placeholder="Enter your Zip Code"
        onChange={handleChange} />
        <span>{errors.zip}</span><br/>

        <button type="submit">Submit</button>

        <h2 className='footer'>© 2026 All rights reserved | Thank you for registering</h2>
        </form>
    </div>
    );
}