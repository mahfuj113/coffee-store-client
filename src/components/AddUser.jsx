import axios from 'axios';
import Swal from 'sweetalert2'

const AddUser = () => {
    const handleAddProduct = e => {
        e.preventDefault()
        const name = e.target.name.value
        const quantity = e.target.quantity.value
        const supplier = e.target.supplier.value
        const taste = e.target.taste.value
        const category = e.target.category.value
        const details = e.target.details.value
        const photo = e.target.photo.value
        const newCoffee = {name,quantity,supplier,taste,category,details,photo}
        console.log(newCoffee);
        //using axios
        axios("http://localhost:5000/coffee",{newCoffee})
        .then(data => {
            console.log(data.data);
        })
        //using fetch
        // fetch("http://localhost:5000/coffee",{
        //     method: "POST",
        //     headers: {"Content-type": "application/json"},
        //     body: JSON.stringify(newCoffee)
        // })
        // .then(res => res.json())
        // .then(data => {
        //     console.log(data);
        //     if(data.insertedId){
        //         Swal.fire({
        //             title: 'Success',
        //             text: 'Do you want to continue',
        //             icon: 'success',
        //             confirmButtonText: 'Cool'
        //           })
        //     }
        // })
    }
    return (
        <div className="bg-[#F4F3F0] p-28">
            <h2 className="text-3xl font-bold text-center">Add Coffee</h2>
            <form onSubmit={handleAddProduct}>
                {/* form row */}
                <div className="flex gap-4 mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="name" placeholder="Your name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Available Quantity</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="quantity" placeholder="Quantity" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <div className="flex gap-4 mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Supplier</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="supplier" placeholder="Your supplier" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Taste</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="taste" placeholder="Taste" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <div className="flex gap-4 mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Category</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="category" placeholder="Your Category" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Details</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="details" placeholder="Details  " className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <div className="flex gap-4 mb-8">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="photo" placeholder="Your photo" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <input type="submit" value="Add Coffee" className="btn btn-info w-full" />
            </form>
        </div>
    );
};

export default AddUser;