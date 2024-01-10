import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import FormIn from './router/form.jsx'
import Root from './router/root.jsx'
import Add from './router/Add.jsx'
import User from './router/user.jsx'
import Friend from './router/friend.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[{
      path : "/student",
      element:<App></App>
}
,{
  path:'student/edit/:id',
  element:<Add></Add>
},
{
  path:"/addstudent",
  element:<Add></Add>
},
{
    path:"/friend",
    element:<Friend></Friend>
},
{
  path:"/user",
  element:<User></User>
}

]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
