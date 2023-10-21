import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { useLoaderData, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";

const SignIn = () => {
    const {login} = useContext(AuthContext)
    const signInUserdata = useLoaderData()
    console.log(signInUserdata);
    const {id} = useParams()
    console.log(id);
    const handleSignIn = e => {
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value
        console.log(email,password);
        login(email,password)
        .then(result => {
            const lastSignIn = result.user?.metadata?.lastSignInTime;
            const user = {email, lastSignIn} 
            console.log(user);
            //using axios
            axios.patch("http://localhost:5000/users",user)
            .then(data => {
                console.log(data.data);
            })
            
            //using fetch
            // fetch(`http://localhost:5000/users`,{
            //     method: "PATCH",
            //     headers: {"content-type": "application/json"},
            //     body: JSON.stringify(user)
            // })
            // .then(res => res.json())
            // .then(data => {
            //     console.log(data);
            //     Swal.fire(
            //         'Success!',
            //         'You successfully sign Up.',
            //         'success'
            //     )
            // })
        })
        .catch(error => {
            console.log(error);
        })
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Sign In now!</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSignIn} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Sign Up</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignIn;