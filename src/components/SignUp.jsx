import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import Swal from "sweetalert2";
import axios from "axios";

const SignUp = () => {
    const {signUp} = useContext(AuthContext)
    // console.log(signUp);
    const handleSignUp = e => {
        e.preventDefault()

        const email = e.target.email.value
        const password = e.target.password.value
        console.log(email,password);
            signUp(email,password)
            .then(result => {
                console.log(result.user);
                const createAt = result.user?.metadata?.creationTime;
                const user = {email , createdAt: createAt}
                //using axios
                axios.post("http://localhost:5000/users",{user})
                .then(data => {
                    if(data.data.insertedId){
                        console.log("Data successfully added");
                    }
                });
                //using fetch
                // fetch("http://localhost:5000/users",{
                //     method: "POST",
                //     headers: {"Content-type" : "application/json"},
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
                    <h1 className="text-5xl font-bold">Sign Up now!</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSignUp} className="card-body">
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

export default SignUp;