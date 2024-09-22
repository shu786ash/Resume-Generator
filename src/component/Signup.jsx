import {React,useState} from "react";
import {useNavigate} from 'react-router-dom';
import axios from 'axios';
const Signup=()=>{
    const navigate=useNavigate();
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [error, setError] = useState('');
    const changeHandleLogin=()=>{
        navigate('/login');
      }
    const registerHandle=async(e)=>{
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
            const res=await axios.post('http://localhost:3000/register',{email,password});
            // console.log(res.data);
            navigate('/');
        }
        catch(err){
            setError(err.res.data);
        }
    }
    return (
        <>
            <div className="signup-container">
                <div className="auth-page">
                    <h2>Signup</h2> 
                    <label className="authmail-input">
                        Email:
                        <input type="email" name="email" onChange={(e)=>setEmail(e.target.value)}  placeholder="Enter your email"/>
                    </label>
                    <label className="authpassword-input">
                        Password:
                        <input type="password" name="password" onChange={(e)=>setPassword(e.target.value)} placeholder="Enter password"/>
                    </label>
                    <button onClick={registerHandle} className="btn-signup">Signup</button><br/>
                    {error && <p>{error}</p>}
                    <div className='login-signup'>
                        <p>Have an account?</p>
                        <button onClick={changeHandleLogin}>Login</button>
                    </div>
                </div>
            </div>
        </>
    )

}
export default Signup;