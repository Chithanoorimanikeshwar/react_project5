import React, { Fragment, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import UserEnquire from './userEnquire';
import { useDispatch } from 'react-redux';
import {fetchUserQueries} from '../store/reducers/userqueries'

const UserEnquireList=()=>{
    const dataLoaded=useSelector((state)=>state.userEnquires.dataAvailable)
    const userEnquires=useSelector((state)=>state.userEnquires.userQueries);
    const dispatch=useDispatch()

    if(dataLoaded){
        console.log(userEnquires)
        if(userEnquires){
            return <div className='container-fluid shadow rounded p-3 mt-5'>
                        {userEnquires.map((enquire,index)=>{
                            console.log(enquire.id)
                            return <Fragment key={enquire.id} >
                                <UserEnquire enquire={enquire} currentcount={index}/>
                                <hr/>
                            </Fragment>
                        })}
                    </div>
        }
        
    }
    else{
        dispatch(fetchUserQueries())
        return <p>loading.....</p>
    }

    // return <UserEnquire/>
}

export default UserEnquireList