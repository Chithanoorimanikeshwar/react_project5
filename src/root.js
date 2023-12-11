import React, { Fragment } from 'react'
import { Outlet } from 'react-router-dom'
import Header from './header'
const Root=()=>{
    return <Fragment>
        <Header/>
            <Outlet/>
         </Fragment>
}

export default Root