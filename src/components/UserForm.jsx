import React, { useState, useEffect } from 'react'
import userService from '../service/userService';
import { useNavigate } from 'react-router';

const UserForm = () => {

  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [dob, setDob] = useState('');

   useEffect(() => {
    
    const curEmail = localStorage.getItem('email');
    const data = {
      email: curEmail
    }
    userService.getUserDetails(data)
    .then((res) => {
      console.log('User Details', res.data);
      if(res.data){
        if(res.data?.name) setName(res.data.name);
        if(res.data?.email) setEmail(res.data.email);
        if(res.data?.phone) setPhone(res.data.phone);
        if(res.data?.dob) setPhone(res.data.dob);

      }
    })
    .catch((err) => {
      console.log(err);
    });

  },[]) 

  const handleNameChange = (e) =>{
    setName(e.target.value);
  }

  const handleEmailChange = (e) =>{
    setEmail(e.target.value);
  }

  const handlePhoneChange = (e) =>{
    setPhone(e.target.value);
  }

  const handleDobChange = (e) =>{
    setDob(e.target.value);
  }


  const handleFormSubmit = (e) => {
    e.preventDefault();


    const details = {
      name,
      email,
      phone,
      dob
    }

    console.log(details);
    
    userService.saveUser(details)
    .then((res) => {
      console.log('Details added', res.data);
      navigate('/result')
    })
    .catch((err) => {
      console.log(err);
    });

    setName('');
    setEmail('');
    setPhone('');
    setDob('');

  };

  const handleFormCancel = (e) =>{
    e.preventDefault();
    setName('');
    setEmail('');
    setPhone('');
    setDob('');
    console.log('Cancel Clicked...')
  }


  return (
    <div>
        <div className='container mt-3'>
          <div className='row'>
            <div className='col-md-6 offset-md-3'>
              <div className='card'>
                <div className='card-header fs-3 text-center'>
                  User Details
                  </div>
                <div className='card-body'>
                  <form >
                    <div className='mb-3'>
                      <label>Full Name</label>
                      <input type='text' name='name' className='form-control' 
                      onChange={(e) => handleNameChange(e) } value={name} ></input>
                    </div>
                    <div className='mb-3'>
                      <label>Email</label>
                      <input type='text' name='email' className='form-control' 
                      onChange={(e) => handleEmailChange(e)} value={email}></input>
                    </div>
                    <div className='mb-3'>
                      <label>Phone Number</label>
                      <input type='text' name='phone' className='form-control' 
                      onChange={(e) => handlePhoneChange(e)} value={phone}></input>
                    </div>
                    <div className='mb-3'>
                      <label>Date Of Birth</label>
                      <input type='date' name='dob' className='form-control' 
                      onChange={(e) => handleDobChange(e)} value={dob}></input>
                    </div>
                    <button className='btn btn-primary col-md-4 form-bttn' 
                    onClick={(e) => handleFormSubmit(e)}>
                    Submit</button>

                    <button className='btn btn-primary col-md-4 form-bttn cancel-btn'
                    onClick={(e) => handleFormCancel(e)}
                    >Cancel</button>

                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default UserForm