import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import Swal from "sweetalert2";
import { FcGoogle } from "react-icons/fc";

const SignUp = () => {
  const { createUser, setUser } = useContext(AuthContext);

  const handleSignUp = (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;

    createUser(email, password)
      .then((result) => {
        const user = result?.user;
        const createdTime = user?.metadata?.creationTime;
        setUser(user);

        const newUser = {
          name,
          photo,
          email,
          createdTime
        };

        // Store user info to the database
        fetch("http://localhost:5000/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },

          body: JSON.stringify(newUser),
        })
          .then((res) => res.json())
          .then((data) => {
            if(data.insertedId){
                Swal.fire({
                    title: "Success!",
                    text: "User Added Successfully",
                    icon: "success",
                    confirmButtonText: "Okay",
                })

                form.reset();
            };
            // console.log(data);
          });
      })
      .catch((error) => {
        const errorMessage = error.message;
        alert(errorMessage);
      });
  };

  return (
    <div className="bg-base-200">
      <Link to="/" className="lg:ml-48 ml-5 flex gap-3 items-center pt-12">
        <FaArrowLeft className="text-xl" />{" "}
        <span className="font-rancho text-3xl font-bold">Back to Home</span>
      </Link>

      <div className="hero py-16">
        <div className="hero-content flex-col">
          <div className="text-center lg:text-left">
            <h1 className="md:text-4xl text-3xl font-bold">Sign Up Now!</h1>
          </div>
          <div className="card bg-base-100 w-full shrink-0 shadow-md mt-6">
            <form className="card-body" onSubmit={handleSignUp}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  name="name"
                  className="input input-bordered md:w-96 w-full"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold">Photo URL</span>
                </label>
                <input
                  type="text"
                  placeholder="Photo URL"
                  name="photo"
                  className="input input-bordered md:w-96 w-full"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  className="input input-bordered md:w-96 w-full"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  className="input input-bordered md:w-96 w-full"
                  required
                />
              </div>

              <div className="form-control mt-6">
                <button className="btn btn-info text-white text-xl font-rancho font-bold">
                  Sign Up
                </button>
              </div>
            </form>

            <div className="text-center font-bold mb-2">Already Have An Account? Please <Link to="/signIn" className="text-cyan-500">Sign In</Link></div>

            <div className="divider w-3/4 mx-auto">Or</div>

            <button className="w-4/5 mx-auto btn btn-outline border-2 border-gray-200 rounded-full hover:btn-primary shadow-md mb-7 font-bold">Sign In with Google <FcGoogle className="text-xl" /></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
