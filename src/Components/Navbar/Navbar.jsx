import React from 'react'
import { Link ,useNavigate} from 'react-router-dom'
import { useAuth } from '../../Auth/AuthContext'
import './Nav.css'

const Navbar = () => {
  const{logout, user} = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login')
  };
  return (
    <nav className='navbar'>
      <ul>
        {!user && (
        <>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/signup">Signup</Link></li>
          </>
        )}
        {user && (
          <>
            <li><Link to="/home">Home</Link></li>
            <li><button onClick={handleLogout} className="logout-btn">Logout</button></li>
            <li>Hello, {user.username}</li>
          </>

          )
        }

      
      </ul>
    </nav>
  )
}

export default Navbar
