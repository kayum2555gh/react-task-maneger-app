import React, {useEffect,useState}from 'react'
import { Link,useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'

const Navbar = () => {

    const [username, setUsername]= useState('');

    const navigate  = useNavigate();

    // logut function

    const logoutHandler = () =>{
        localStorage.removeItem('mern3Todo')
        toast.success("logout successfully")
        navigate('/login')
    }

    // get username
    useEffect(() =>{
        const userData = JSON.parse(localStorage.getItem('mern3Todo'));
        // console.log(userData && userData.user.username);
        setUsername(userData && userData.user.username)
    },[]);

    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <h4 className='navbar-brand'>
                            <i className='fa-solid fa-user-tie'/> 
                            <i>Wlecome</i> {username}
                        </h4>
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
                            </li>
                            <li className="nav-items">
                                <Link className="nav-link" to="/todolist">My todo List</Link>
                            </li>
                            <li className="nav-items">
                                <button className="nav-link" title="lagout" onClick={logoutHandler}>
                                    <i class="fa-solid fa-power-off text-danger fa-2x"></i>
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar