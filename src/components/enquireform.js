import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import course, {selectItemById,getCourses} from "../store/reducers/course"
import Form from "./enquireformface";
import axios from "axios";

const EnquireForm=()=>{
    const [courseId]=useSearchParams()
    const navigate=useNavigate()
    const [invalidUrl,setinvalidUrl]=useState(false)
    const dispatch=useDispatch()
    const courseIdd=Number(courseId.get('courseId'))
    const [formsubmitted,setFormSubmission]=useState(false)
    const courseDetails=useSelector(selectItemById(courseIdd))
    useEffect(()=>{
        if(invalidUrl){
          
            navigate('/',{replace:true})
        }
        if(!courseDetails){
            dispatch(getCourses())
        }
        console.log('1')
        },[invalidUrl])

    
    useEffect(()=>{
        console.log(courseIdd)
        console.log(courseDetails)
        console.log('2')
    },[courseId,courseDetails])
  
    function submitEnquireForm(userData){
        axios.post('http://localhost:3000/userDetais',{...userData,courseId:courseIdd})
        .then(()=>navigate('/response/success'))
        .catch(()=>navigate('/response/fail'))
        
    }


    if(courseId.size==1 && courseId.get('courseId')){
        if(courseDetails){
            return (
                <div className="container">
                    <h1>{courseDetails.title} Enquire Form</h1>
                    <hr/>
                    <Form submitData={submitEnquireForm}/>
                </div>
                // <h1>This is Enquire Form</h1>
              
            )
        }   
        
    }else{
        if(!invalidUrl){
            setinvalidUrl(true)
            console.log('set true')
        }
    }
    
   

    
    }


    
   
export default EnquireForm