import React, { useState} from 'react'
import { Link ,useNavigate} from 'react-router-dom'
import "./AuthStyles.css"
import AuthServices from '../../Services/AuthServices';
import toast from 'react-hot-toast';
import { getErrorMessage } from '../../Utils/ErrorMessage';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  // login hanndeler
  let loginHandeler = async (e) => {
    try {
      e.preventDefault();
      const data = { email, password }
      const res = await AuthServices.loginUser(data);
      console.log(res)
      toast.success(res.data.message)
      navigate('/home')
      localStorage.setItem('mern3Todo',JSON.stringify(res.data));
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
          <p className='text-center'>not a user? please
            <Link to="/register">Register</Link>
          </p>
          <button type='Submit' className='login-btn' onClick={loginHandeler}>Login</button>
        </div>
      </div>
    </div>
  )
}

export default Login