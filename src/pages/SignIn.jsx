import { useContext } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const SignIn = () => {
    const {signInUser} = useContext(AuthContext);

    const handleSignIn = (e) => {
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;

        signInUser(email, password)
        .then(result => {
            const user = result.user;
            // console.log(user);

            const lastSignInTime = user?.metadata?.lastSignInTime;
            const signInInfo = {email, lastSignInTime};

            fetch("http://localhost:5000/users", {
              method: "PATCH",
              headers: {
                'content-type': 'application/json'
              },
              body: JSON.stringify(signInInfo)
            })
            .then(res => res.json())
            .then(data => {
              // console.log(data);
            })

            e.target.reset();
        })
        .catch(error => {
            const errorMessage = error.message;
            alert(errorMessage);
        })
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
            <h1 className="md:text-4xl text-3xl font-bold">Sign In Now!</h1>
          </div>
          <div className="card bg-base-100 w-full shrink-0 shadow-md mt-6">
            <form className="card-body" onSubmit={handleSignIn}>
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

                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>

              <div className="form-control mt-6">
                <button className="btn btn-success text-white text-xl font-rancho font-bold">
                  Sign In
                </button>
              </div>
            </form>

            <div className="text-center font-bold mb-9">If you are a new user? Please <Link to="/signUp" className="text-amber-500">Sign Up</Link></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
