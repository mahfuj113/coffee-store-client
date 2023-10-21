import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'
// import { Link } from 'react-router-dom';

const CoffeeCard = ({ coffee, setCoffees, coffees }) => {
    const { _id, name, quantity, photo, supplier, taste } = coffee

    const handleDelete = id => {
        Swal.fire({
            title: 'Are you sure!',
            text: 'Do not revert this',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#63C7F6',
            cancelButtonColor: '#E64942',
            confirmButtonText: 'Yes, delete it'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/coffee/${id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        Swal.fire(
                            'Deleted',
                            'Your coffee has been deleted',
                            'success'
                        )
                        if (data.deletedCount > 0) {
                            const remaining = coffees.filter(cfe => cfe._id !== _id)
                            setCoffees(remaining)
                        }
                    })
            }


        }

        )
    }
    return (
        <div className="card card-side bg-base-100 shadow-xl">
            <figure><img src={photo} alt="Movie" /></figure>
            <div className="flex justify-between pr-4 w-full">
                <div>
                    <h2 className="card-title">Name: {name}</h2>
                    <p>{quantity}</p>
                    <p>{supplier}</p>
                    <p>{taste}</p>
                </div>
                <div className="card-actions justify-end">
                    <div className='btn-group btn-group-vertical space-y-4'>
                    <button className="btn">view</button>
                    <button className='btn bg-orange-500' onClick={() => handleDelete(_id)}>X</button>
                    <Link to={`/updateUser/${_id}`}>
                        <button className='btn'>Update</button>
                    </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

CoffeeCard.propTypes = {
    coffee: PropTypes.object.isRequired,
    setCoffees: PropTypes.func.isRequired,
    coffees: PropTypes.array.isRequired,
}

export default CoffeeCard