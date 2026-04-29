

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