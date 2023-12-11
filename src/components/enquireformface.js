import React,{useState,useEffect, Fragment} from 'react'

const Form=(props)=>{

    const [enquireForm,setEnquireForm]=useState({})

    const updateState=(event)=>{
        setEnquireForm(()=>{
            return {...enquireForm,[event.target.ariaLabel]:event.target.value}
        })
    }

    return <div className='row justify-content-center shadow p-5'>
        <div className='col-6'>
            <label for="fullname" className='form-label'>Full Name</label>
            <input type='text' 
                value={enquireForm.fullname}
                onChange={updateState}
                className='form-control'
                aria-label='fullname'
            />
        </div>
        <div className='col-6'>
            <label for="phonenumber" className='form-label'>Phone Number</label>
            <input type='text' 
                value={enquireForm.phonenumber}
                onChange={updateState}
                className='form-control'
                aria-label='phonenumber'
            />
        </div>
        <div className='col-12'>
            <label for="email" className='form-label'>Email</label>
            <input type='text' 
                value={enquireForm.email}
                onChange={updateState}
                className='form-control'
                aria-label='email'
            />
        </div>
        <button
            className='btn btn-primary col-6 mt-5'
            onClick={()=>props.submitData(enquireForm)}
            >
            
            submit
        </button>
    </div>
}

export default Form