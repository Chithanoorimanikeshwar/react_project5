import React from 'react';
import { useNavigate } from 'react-router-dom';

const Response=()=>{
    const navigate=useNavigate()

    setTimeout(() => {
        navigate('/')
    }, 2000);

    return <div className='container shadow border'>
        <center><h3>YOUR ENQUIRE HAS BEEN SUBMITTED SUCCESFULLY</h3></center>
        <center><p>we shell contact you soon</p></center>
    </div>

   
}
export default Response