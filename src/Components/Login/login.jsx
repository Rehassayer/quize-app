import React,{useState} from 'react'
import './Login.css';
import { useAuth } from '../../Auth/AuthContext';
import { useNavigate } from 'react-router-dom';
const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const {login, signup} = useAuth();
  const [fName, setfName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();



    const handleLogin = (e) => {
      e.preventDefault();
      const sucess = login(username, password);
      if(sucess){

        navigate('/home')
      }
        else{
        alert("invalid username or password!","/signup")
        navigate('/login')
      }
    }
    const handleSignup = (e) => {
      e.preventDefault();
      signup(fName, username, password);
      alert("Signup successful!");
      setIsLogin(true);
    }
  return (
    <div className='container'>
    <div className='form-container'>
        <div className='form-toggle'>
            <button className={isLogin ? 'active' : ""} onClick={() => setIsLogin(true)}>Login</button>
            <button className={!isLogin ? 'active' : ""} onClick={() => setIsLogin(false)}>Signup</button>
        </div>


        {isLogin ? (

          <div className='form'>
            <h2>Login Form</h2>
            <form onSubmit={handleLogin}>

            <input type='text' placeholder='Username'  onChange={(e) => setUsername(e.target.value)}/><br/>
            <input type='password' placeholder='Password'onChange={(e) => setPassword(e.target.value)} />
            <a href='#'>Forget password?</a>
            <button>Login</button>
            <p>Not a member?<a href='#' onClick={() => setIsLogin(false)}>Signup now</a></p>
            </form>
        </div>
        )
        :  (

          <div className='form'>

         <h2>Signup Form</h2>
         <form onSubmit={handleSignup}>

            <input type='fullname' placeholder='FullName' onChange={ (e) => setfName(e.target.value)}/><br/>
            <input type='username' placeholder='Username' onChange={ (e) => setUsername(e.target.value)}/><br/>
            <input type='password' placeholder='Password'onChange={ (e) => setPassword(e.target.value)} /><br/>
            <button type='submit'>Signup</button>
         </form>
        </div>
      )
        }
        
    </div>
    </div>
  );
};

export default Login;
