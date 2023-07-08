import React from 'react'
import axios from 'axios';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import './style.css'
import { FaHome } from "react-icons/fa";

const Navbar = () => {
  const navigate = useNavigate();
  const loggedIn = JSON.parse(localStorage.getItem('authToken'))
  //handle logout
  const handleLogout = async() =>{
      try{
         await axios.post('https://intelli-bot-backend.onrender.com/api/v1/auth/logout')
         localStorage.removeItem("authToken")
         toast.success('logout success')
         navigate('/login')
      }
      catch (error){
        console.log(error)
      }
  }

  const handlelogin = async() =>{
    navigate('/login');
  }

  const handleregister = async() =>{
    navigate('/register');
  }

  const handlehome = async() =>{
    navigate('/');
  }

  return (
    <>
      <>
        <div className="headerx">
          <div className="header">
            <div className="logo">
              <h1>INTELI-BOT</h1>
            </div>
            <div className="right">
              <div className="usergreet">
                <span className="greet">
                  Hello! <b>USER</b>
                </span>
              </div>
              <div className="buttongreet">
                <button className="addButton" onClick={handlehome}>
                  <FaHome /> HOME
                </button>
                {loggedIn ? (
                  <>
                    <button className="addButton logoutButton" onClick={handleLogout}>Logout</button>
                  </>
                ) : (
                  <>
                      <button className="addButton logoutButton" onClick={handleregister}>SignUp</button>
                      <button className="addButton logoutButton" onClick={handlelogin}>SignIn</button>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="footer">
          Made by Ayushi Mahobia
        </div>
      </>
    </>
  );
}

export default Navbar
