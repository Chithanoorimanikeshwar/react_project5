import axios from 'axios';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../store/reducers/userqueries';

const UserEnquireForm=()=>{
    const [userEnquire,setuserEnquire]=useState('');
    const dispatch=useDispatch()

    function ontimeupdate(event){
        setuserEnquire((preValue)=>{
            const currentValue=event.target.value;
            if(!(currentValue===preValue)){
                return currentValue
            }
        })}

    function formSubmitted(){
        axios.post(' http://localhost:3000/enquires',{
            id:Math.floor(Math.random()*100000),
            query:userEnquire,
            response:[],
            published_data:new Date().toJSON()
        })
        .then((res)=>{
            dispatch(addItem(res.data))
        })
    }
   return <div className='container-fluid shadow rounded p-3'>
            <div className="mb-3 ">
                <label htmlFor="query" className="form-label">Enter query Here</label>
                <input type="query" className="form-control"  id="query" aria-describedby='query' onChange={ontimeupdate}/>
                <div id="query" className='form-text'>please enter and submit your query regarding any course</div>
            </div>
            <button onClick={formSubmitted}
            className='btn btn-primary'
            >submit</button>
         </div>
}

export default UserEnquireForm