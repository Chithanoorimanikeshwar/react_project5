import React from "react";
import  ReactDOM  from "react-dom/client";
import { Provider } from "react-redux";
import App from "./components/home";
import Root from './root'
import UserEnquiresFace from "./components/userenquriesface";
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import { store } from "./store/store";
import EnquireForm from "./components/enquireform";
import Response from './components/response'
const container=document.getElementById('root');
const routes=createBrowserRouter([
    {
        path:"/",
        element:<Root/>,
        children:[
            {
                path:"/",
                element:<App/>
            },
            {
                path:"enquries",
                element:<UserEnquiresFace/>
            },
            {
                path:"enquireform",
                element:<EnquireForm/>
            },
            {
                path:'response/:submission',
                element:<Response/>
            }
        ]
    }
])

const root=ReactDOM.createRoot(container);

root.render(
    <Provider store={store}>
        <RouterProvider router={routes}></RouterProvider>
    </Provider>
    
        
   
)