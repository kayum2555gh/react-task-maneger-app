import React, { useState } from 'react'
import './AuthStyles.css'
import { Link, useNavigate } from 'react-router-dom'
import AuthServices from '../../Services/AuthServices';
import toast from 'react-hot-toast';
import { getErrorMessage } from '../../Utils/ErrorMessage';

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username,setUsername] = useState("")

  const navigate = useNavigate();

  // login hanndeler
  let registerHandeler = async(e) => {
    try {
      e.preventDefault();
      const data = {username,email,password};
      const res = await AuthServices.registeruser(data)
      toast.success(res.data.message);
      navigate('/login');

      console.log(res.data);
      
    } catch (err) {
      toast.error(getErrorMessage(err));
      console.log(err);
    }
  }

  return (
    <div className="form-container">
      <div className="form">
        <div className="mb-3">
          <i className="fa-solid fa-circle-user"></i>
        </div>
        <div className="mb-3">
          <input
            type="text"
            className='form-control'
            placeholder='enter username'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <input
            type="email"
            className='form-control'
            placeholder='enter email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <input
            type="password"
            className='form-control'
            placeholder='enter password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="form-control">
           <p className='text-center'>already user? please
              <Link to="/login">Login</Link>
            </p>
          <button type='Submit' className='login-btn' onClick={registerHandeler}>Register</button>
        </div>
      </div>
    </div>
  )
}

export default Register