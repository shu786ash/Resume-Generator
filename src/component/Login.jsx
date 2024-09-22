import {React,useState} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
const Login=()=>{
    const navigate=useNavigate();
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [error, setError] = useState('');
    const changeHandleSignup=()=>{
        navigate('/signup');
      }
    const loginHandle=async(e)=>{
        e.preventDefault();
        if(!email||!password){
            setError('Email and Password is required')
            return;
        }
        if(!email.includes('@')){
            setError('Invalid Email');
            return;
        }
        try{
            const res=await axios.post('http://localhost:3000/checkUser',{email,password});
            const token = res.data.accessToken;
            localStorage.setItem('token', token);
            const prevPath = localStorage.getItem('prevPath');
            navigate(prevPath||'/');
        }
        catch(err){
            setError(err.message);
        }
    }
    return(
        <>  
            <div className="signup-container">
                <div className="auth-page">
                    <h2>Login</h2> 
                    <label className="authmail-input">
                        Email:
                        <input type="email" name="email" onChange={(e)=>setEmail(e.target.value)}  placeholder="Enter your email"/>
                    </label>
                    <label className="authpassword-input">
                        Password:
                        <input type="password" name="password" onChange={(e)=>setPassword(e.target.value)} placeholder="Enter password"/>
                    </label>
                    <button onClick={loginHandle} className="btn-signup">Login</button><br/>
                    {error && <p>{error}</p>}

                    <div className='login-signup'>
                        <p>Don't have a account?</p>
                        <button onClick={changeHandleSignup}>Signup</button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Login;