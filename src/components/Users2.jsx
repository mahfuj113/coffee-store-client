import { useQuery } from "@tanstack/react-query";
import { data } from "autoprefixer";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const Users2 = () => {

    const {isPending,isError,error, data: user} = useQuery({queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch("http://localhost:5000/users")
            return res.json()
        }
    })
    console.log(data);

    if(isPending){
        return <span className="loading loading-spinner text-primary"></span>
    }
    if(isError){
        return <p>{error.messa}</p>
    } 
        // const [user,setUser] = useState([])
        // useEffect(() => {
        //     fetch("http://localhost:5000/users")
        //     .then(res => res.json())
        //     .then(data => {
        //         setUser(data);
        //     })
        // },[])

    const handleDelete = id => {


        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                //using fetch
                fetch(`http://localhost:5000/users/${id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            const remaining = user.filter(usr => usr._id !== id)
                            setUser(remaining)
                            console.log(remaining);
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                    })
            }
        })
    }
    return (
        <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Email</th>
                            <th>Create At</th>
                            <th>Last logged in</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    {
                        user?.map(user => <tbody key={user._id}>
                            <tr>
                                <th>1</th>
                                <td>{user.email}</td>
                                <td>{user.createdAt}</td>
                                <td>{user.lastSignIn}</td>
                                <td>
                                    <Link to={`/signIn/${user._id}`}>
                                        <button className="btn">Update</button>
                                    </Link>
                                </td>
                                <td>
                                    <button onClick={() => handleDelete(user._id)} className="btn">X</button>
                                </td>
                            </tr>
                        </tbody>)
                    }
                </table>
            </div>
    );
};

export default Users2;