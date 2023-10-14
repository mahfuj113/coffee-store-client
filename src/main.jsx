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
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import AuthProvider from './providers/AuthProvider';
import Users from './components/Users';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    loader: () => fetch("https://coffee-store-server-br2197btc-mahfuj113.vercel.app/coffee")
  },
  {
    path: '/addUser',
    element: <AddUser></AddUser>
  },
  {
    path: '/updateUser/:id',
    element: <UpdateUser></UpdateUser>,
    loader: ({ params }) => fetch(`https://coffee-store-server-br2197btc-mahfuj113.vercel.app/coffee/${params.id}`)
  },
  {
    path: '/signUp',
    element: <SignUp></SignUp>
  },
  {
    path: '/signIn',
    element: <SignIn></SignIn>
  },
  {
    path: '/signIn/:id',
    element: <SignIn></SignIn>
  },
  {
    path: '/users',
    element: <Users></Users>,
    loader: () => fetch("https://coffee-store-server-br2197btc-mahfuj113.vercel.app/users")
  }
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
