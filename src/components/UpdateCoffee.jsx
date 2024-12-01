import { FaArrowLeft } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
  const coffee = useLoaderData();

  const { _id, name, price, supplier, taste, category, details, photo } =
    coffee;

  const handleUpdateCoffee = (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const price = form.price.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;

    const updatedCoffee = {
      name,
      price,
      supplier,
      taste,
      category,
      details,
      photo,
    };

    // console.log(updatedCoffee);

    fetch(`http://localhost:5000/coffee/${_id}`, {
      method: 'PUT',
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: "Coffee Details Updated Successfully",
            icon: "success",
            confirmButtonText: "Okay",
          });
        }
      });
  };

  return (
    <div className="py-20">
         <Link to="/" className="lg:ml-48 ml-5 flex gap-3 items-center"><FaArrowLeft className="text-xl"/> <span className="font-rancho text-3xl font-bold">Back to Home</span></Link>

      <div className="lg:w-3/4 mx-auto bg-[#F4F3F0] rounded-xl p-16 my-16">
        <h2 className="font-rancho text-3xl md:text-5xl font-extrabold text-center pb-10 space-y-5">
          Update Existing Coffee: {name}
        </h2>

        <form onSubmit={handleUpdateCoffee}>
          {/* Flex Row */}
          <div className="md:flex justify-center items-center gap-5 flex-wrap">
            <div className="form-control md:w-2/5">
              <label className="label">
                <span className="label-text font-bold">Coffee Name</span>
              </label>
              <input
                type="text"
                placeholder="Enter Coffee Name"
                defaultValue={name}
                name="name"
                className="input input-bordered w-full"
              />
            </div>

            <div className="form-control md:w-2/5">
              <label className="label">
                <span className="label-text font-bold">Price</span>
              </label>
              <input
                type="text"
                placeholder="Enter price"
                defaultValue={price}
                name="price"
                className="input input-bordered w-full"
              />
            </div>
          </div>

          {/* Form Supplier Row */}
          <div className="md:flex justify-center items-center gap-5 flex-wrap">
            <div className="form-control md:w-2/5">
              <label className="label">
                <span className="label-text font-bold">Supplier</span>
              </label>
              <input
                type="text"
                placeholder="Enter Supplier Name"
                defaultValue={supplier}
                name="supplier"
                className="input input-bordered w-full"
              />
            </div>

            <div className="form-control md:w-2/5">
              <label className="label">
                <span className="label-text font-bold">Taste</span>
              </label>
              <input
                type="text"
                placeholder="Enter Taste"
                defaultValue={taste}
                name="taste"
                className="input input-bordered w-full"
              />
            </div>
          </div>

          {/* Form Category Row */}
          <div className="md:flex justify-center items-center gap-5 flex-wrap">
            <div className="form-control md:w-2/5">
              <label className="label">
                <span className="label-text font-bold">Category</span>
              </label>
              <input
                type="text"
                placeholder="Enter Category"
                defaultValue={category}
                name="category"
                className="input input-bordered w-full"
              />
            </div>

            <div className="form-control md:w-2/5">
              <label className="label">
                <span className="label-text font-bold">Details</span>
              </label>
              <input
                type="text"
                placeholder="Enter Coffee Details"
                defaultValue={details}
                name="details"
                className="input input-bordered w-full"
              />
            </div>
          </div>

          {/* Form Photo URL */}
          <div>
            <div className="form-control md:w-[82%] mx-auto">
              <label className="label">
                <span className="label-text font-bold">Photo</span>
              </label>
              <input
                type="text"
                placeholder="Enter Photo URL"
                defaultValue={photo}
                name="photo"
                className="input input-bordered w-full"
              />
            </div>
          </div>

          <div className="form-control mt-5">
            <button className="text-xl w-[82%] mx-auto btn bg-[#D2B48C] font-rancho font-semibold">
              Update Coffee Details
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateCoffee;
