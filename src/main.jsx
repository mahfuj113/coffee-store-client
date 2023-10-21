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
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import Users2 from './components/Users2';

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
    loader: ({ params }) => fetch(`http://localhost:5000/coffee/${params.id}`)
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
    loader: () => fetch("http://localhost:5000/users")
  },
  {
    path: '/users2',
    element: <Users2></Users2>,
  }
]);

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </QueryClientProvider>
  </React.StrictMode>,
)
