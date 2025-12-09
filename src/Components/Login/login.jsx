import React from 'react'

const login = () => {
  return (
    <div>
      <form action="">
        <div>
        <label htmlFor='uname'>Username</label>
        <input type='uname' placeholder='Enter username'/>
        </div>

        <div>
            <label htmlFor="password">Password</label>
            <input type='password' placeholder='Enter password' />
        </div>
        <button>Login</button>
      </form>
    </div>
  )
}

export default login
