import React from 'react'
import "./Login.css";
import { Link } from "react-router-dom";

const Login = () => {
    return (
        <div>
            Login
            <Link to="/signup"> <button type="button" className="btn btn-primary">SignUp</button></Link>
        </div>
    )
}

export default Login
