import React from 'react';
import { Link } from 'react-router-dom';
import "./Register.css";

const Register = () => {
    return (
        <div>
            Register
            <Link to="/Login"> <button type="button" className="btn btn-primary">SignIn</button></Link>
        </div>
    )
}

export default Register
