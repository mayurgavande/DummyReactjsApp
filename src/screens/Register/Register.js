//import { useHistory } from "react-router-dom";
import useForm from "../../useForm";
import validate from "../../FormValidation/SignupFormValidationRules";
import { ActionCreators } from "../../actions/profile";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { setStore } from "../../utils";

const Register = (props) =>{

    //let history = useHistory();
    
    const register = () =>{
      props.dispatch(ActionCreators.formSubmitionStatus(true));
      if(props.profile){
        setStore('user', values);
        console.log('No errors, submit callback called!',values);
        alert('Congratulation your profile Completed successfully!');
        props.history.push('/home');
      }else{
        alert('Invalid User Details!');
        props.history.push('/register');
      }
     
      
    };

    const { values,errors,handleChange,handleSubmit } = useForm(register,validate)

    return (
        <>
        <div className="container-fluid">
            <div className="card mt-5">
                <div className="card-header">
                    <h4>Register Form</h4>
                </div>
                <div className="body p-5">
            <form onSubmit={handleSubmit} noValidate>
            <div className="form-group">
              <label>Name</label>
              <input
                autoComplete="off"
                type="text"
                name="name"
                className={` form-control input ${errors.name && 'text-dark'}`}
                onChange={handleChange}
                value={values.name || ''}
                required
              ></input>
              {errors.name && ( <p className="help text-danger">{errors.name}</p> )}

            </div>
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
              Signup
            </button>
            </form>
          </div>
                
            </div>
        </div>
        </>
    );
}

const mapStateToProps = (state)=> {
  console.log("register state user profile check ",state.user);
  return {
    profile : state.user
  }
}

export default connect(mapStateToProps)(withRouter(Register));