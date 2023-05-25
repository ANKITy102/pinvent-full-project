import React, { useState } from 'react'
import styles from "./auth.module.scss"
import { AiOutlineMail } from "react-icons/ai";
import Card from '../../components/card/Cardf';
import { Link } from 'react-router-dom';
import { forgotPassword, validateEmail } from '../../services/authService';
import { toast } from 'react-toastify';
const Forgot = () => { 
  const [email, setEmail] = useState("");
  const forgot = async (e)=>{
    e.preventDefault();
    if( !email){
      return toast.error("All fields are required");
    }
    
    if(!validateEmail(email)){
      return toast.error("Passwords do not match");
    }

    const userData = {
      email
    };
      await forgotPassword(userData) 
      toast.success("Reset email is sent ")

    
    setEmail("")
  }
  return (
    <div className={`container ${styles.auth}`}>
      <Card>
        <div className={`${styles.form}`}>
          <div className="--flex-center">
            <AiOutlineMail size={35} color="#999" />
          </div>
          <h2>Forgot Password</h2>
          <form action="" onSubmit={forgot}>
            <input type="email" placeholder="Email" value={email} onChange={(e)=>{
              setEmail(e.target.value);
            }} required name="email" />
            <button type="submit" className="--btn --btn-primary --btn-block">Get Reset Email</button>
            <div className={styles.links}>
              <p>
                <Link to="/">-Home</Link>
              </p>
              <p>
                <Link to="/login">- Login</Link>
              </p>
            </div>
          </form>

        </div>
      </Card>
    </div>
  )
}

export default Forgot
