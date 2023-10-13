import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import App from './App';
import AddUser from './components/addUser';
import UpdateUser from './components/updateUser';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    loader: () => fetch("http://localhost:5000/coffee")
  },
  {
    path: '/addUser',
    element: <AddUser></AddUser>
  },
  {
    path: '/updateUser/:id',
    element: <UpdateUser></UpdateUser>,
    loader: ({params}) => fetch(`http://localhost:5000/coffee/${params.id}`)
  }
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
