import React from "react";
import { Link } from "react-router-dom";
const Course=(props)=>{
    const coursedetails=props.course

    if(coursedetails.course_Available){
        return(
            <div className="card bg-info-subtle m-2" style={{width:18+'rem'}}>
                <div className="card-body">
                    <h5 className="card-title">{coursedetails.title}</h5>
                    <h6 className="card-subtitle mb-2 text-body-secondary">{coursedetails.price}</h6>
                    <p className="card-text">{coursedetails.course_discription}</p>
                    <Link to={`/enquireform?courseId=${coursedetails.courseId}`} className="btn btn-success">Enquire</Link>
                </div>
            </div>
        ) 
    }
    return null
}
export default Course