import React, { useContext, useState } from 'react';
import './Login.css'
import { Link } from "react-router-dom";
import { AuthContext } from '../Providers/AuthProvider';
import { useNavigate } from "react-router-dom";

const Login = () => {
    // const [error, setError] = useState('')
    const navigate = useNavigate();

    const {signIn} = useContext(AuthContext);

    const handleSignIn=(event)=>{
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        console.log(email, password)

        signIn(email, password)
        .then(result=>{
            const loggedUser = result.user;
            console.log(loggedUser)
            form.reset()
            navigate('/')
        })
        .catch(error=>{
            console.log(error)
           
        })

        if(password<6){
            setError('Please provide atleast 6 characters')
        }
    }



    return (
        <div className='form-container'>
            <h2 className='form-title'>Login</h2>
            <form onSubmit={handleSignIn}>
                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="" required />
                </div>
                <div className="form-control">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="" required />
                </div>
                <input className='btn-submit' type="submit" value="Login" />
            </form>
            {/* <p>{error}</p>/ */}
            <p><small>New to Ema-jogn? <Link to="/signup">Create new account</Link> </small> </p>
        </div>
    );
};

export default Login;