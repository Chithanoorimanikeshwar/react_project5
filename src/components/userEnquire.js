import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios';

const UserEnquire=(props)=>{
    const [writeresponseon,setWriteResponse]=useState(false);
    const [btnproperties,setBtnProperties]=useState({
        innerHTML:'Write Response',
        class:'btn-info'
    })
    const [userresponse,setUserResponse]=useState('')
    useEffect(()=>{
        setBtnProperties((prev)=>{
            // console.log(prev)
            if(writeresponseon){
                return {innerHTML:'Post Response',class:'btn-success'}
            }
            else return {innerHTML:'Write Response',class:'btn-primary'}
           })
    },[writeresponseon])

    function handleClickEvent(event){
        if(writeresponseon) {
            axios.patch(` http://localhost:3000/enquires/${props.enquire.id}`,{
                ...props.enquire,
                response:[...props.enquire.response,{
                    id:Math.floor(Math.random()*1000),
                    published_date:new Date().toJSON(),
                    response:userresponse
                }]
            }).then(()=>setWriteResponse(false))
           
        }
        else setWriteResponse(true)
       
    }
    function renderWriteBlock(){
        console.log(writeresponseon)
        if(writeresponseon){
            return <textarea rows="4" cols="80" className='border-1' onChange={(event)=>setUserResponse(event.target.value)}>res.</textarea>
    
        }
        return null  
    }
    function handleCloseContext(){
        setWriteResponse(false)
    }
    function fetchResponses(){
        return props.enquire.response.map((res)=>{
            return <div className='container-fluid' key={res.response.id}>
                <div className='d-flex'>
                    <p>{res.response}</p>
                    <p className='ms-auto'>published On{res.published_date}</p>
                </div>
            </div>
        })
    }
    return <div className="container-fluid">
                <div className='d-flex'>
                    <p className='fs-5'>Q.{props.currentcount+1}.{props.enquire.query}?</p>
                    <div className='ms-auto'>
                        <button className={`${btnproperties.class} btn `} onClick={handleClickEvent}>{btnproperties.innerHTML}</button>
                        {writeresponseon?
                        <button className="btn btn-danger" onClick={handleCloseContext}>Close</button>:
                        null
                        }
                    </div>
                </div>
                 {renderWriteBlock()}
                 <div className='row'>
                        {fetchResponses()}
                 </div>
        </div>
}

export default UserEnquire