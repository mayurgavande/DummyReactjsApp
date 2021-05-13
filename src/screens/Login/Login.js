import useForm from "../../useForm";
import validate from "../../FormValidation/LoginFormValidationRules";
import { ActionCreators } from "../../actions/profile";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { getStore } from "../../utils";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const Login = (props) =>{

    const [loginstatus, setloginStatus ] = useState({});

    const login = () =>{
        const user = getStore('user')
      if (user?.email && user?.password) {
        props.dispatch(ActionCreators.login(user));
        props.history.push('/home')
      } else {
        setloginStatus('Login Failed! Invalid Username and Password')
      }

    }
   
    console.log("loginstatus",loginstatus.length);

    const { values,errors,handleChange,handleSubmit } = useForm(login,validate)

    return (
        <>
        <div className="container-fluid">
            <div className="card mt-5">
                <div className="card-header">
                    <h4>Login Form</h4>
                </div>
                <div className="body p-5">
                <div className="row">
                    <div className="col-sm-12 text-center mt-1">
                        {  loginstatus.length > 0 &&  <span className='text-danger'>{ loginstatus }</span> }
                    </div>
                </div>
            <form onSubmit={handleSubmit} noValidate>
            <div className="form-group">
              <label>Email</label>
              <input
                autoComplete="off"
                type="email"
                name="email"
                className={` form-control input ${errors.email && 'text-dark'}`}
                onChange={handleChange}
                value={values.email || ''}
                required
              ></input>
              {errors.email && ( <p className="help text-danger">{errors.email}</p> )}

            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                className={` form-control input ${errors.password && 'text-dark'}`}
                name="password"
                onChange={handleChange}
                value={values.password || ''}
                required
              ></input>
              {errors.password && ( <p className="help text-danger">{errors.password}</p>)}
              
            </div>

            <button type="submit" className="btn btn-info btn-block p-2">
              Login
            </button>
            </form>

            <div className="row">
                <div className="col-md-12 mt-2 text-right">
                    <NavLink to="/register" className="text-info">Register</NavLink>
                </div>
            </div> 
          </div>

          
                
            </div>
        </div>
        </>
    );
}

const mapStateToProps = (state) => {
    return {
      profile: state.user
    }
  }

export default  connect(mapStateToProps)(withRouter(Login));