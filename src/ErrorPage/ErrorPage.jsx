import { Link } from "react-router-dom";
import errorImg from "/src/assets/404/404.gif";
import { FaArrowLeft } from "react-icons/fa";

const ErrorPage = () => {
  return (
   <div className="pt-20">
      <Link to="/" className="flex gap-3 justify-center items-center">
        <FaArrowLeft className="text-xl" />{" "}
        <span className="font-rancho text-3xl font-bold">Back to Home</span>
      </Link>

     <div className="flex justify-center items-center">
      <figure>
        <img src={errorImg} alt="image of error: 404" />
      </figure>
    </div>
   </div>
  );
};

export default ErrorPage;
