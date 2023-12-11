import React from "react";
import { useDispatch,useSelector} from "react-redux";
import { getCourses } from "../store/reducers/course";
import './home.css'
import { useState,useEffect } from "react";
import { store } from "../store/store";
import Course from "./course";


const App=()=>{
    const dispatch=useDispatch()
    const [courses,setCourses]=useState([])
    // const [dataAvailable,setdataAvailable]=useState(useSelector((state) => state.courses.dataLoaded))
    const dataAvailable=useSelector((state)=>state.courses.dataLoaded)

    useEffect(()=>{
        if(!dataAvailable){
            dispatch(getCourses())
        }
    },[dataAvailable])


      useEffect(() => {
        console.log('hello')
            if(store.getState().courses.dataLoaded){
                console.log(store.getState().courses)
                setCourses(store.getState().courses.courses)
                // setdataAvailable(true);  // Update dataAvailable directly to true // 
            
            }
            
      }, [dispatch,dataAvailable]); 


      useEffect(() => {
        let timeoutId;
    
        if (!dataAvailable) {
          timeoutId = setTimeout(() => {
            const userConfirmed = window.confirm(
              'Please start json server using json-server --watch db.json'
            );
            if (userConfirmed) {
              window.location.reload();
            }
          }, 5000);
        }
    
        // Clear the timeout when the component unmounts or data becomes available
        return () => clearTimeout(timeoutId);
      }, [dataAvailable]);
    

    if(dataAvailable){
        console.log(courses.length>0)
       return <div className="container bg-body-secondary mt-2">
       <div className="d-flex  flex-wrap">
            {courses.map((value)=>{
                return <Course course={value} key={value.courseId}/>
            })}
       </div>
       </div>

        // return <p>{courses[0].title}</p>
        
    }
    else{
        console.log('1')
      console.log(dataAvailable)
        return <div className="spinner-border" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
        
    }

    
    



   
}



export default App