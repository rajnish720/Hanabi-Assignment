import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import './style.css'

const Home = () => {
  const [email, setEmail] = useState('');

 const handleSubmit = () => {
  localStorage.setItem('email', email);
 }

  return (
    <div>
      <div className='container mt-3'>
        <div className='row'>
          <div className='col-md-12'>
            <div className='card col-9 m-auto' style={{height:'100vh', border:'none'}}>
              <div className='m-auto' style={{display:'flex'}}>
                <input type='email' className='form-control' placeholder='Email'
                value={email} onChange={(e) => setEmail(e.target.value)}
                ></input>
                <button className='home-button' onClick={() => handleSubmit()}>
                <Link to='/user-form' class="nav-link" href="#">Get Started</Link>
                </button >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home