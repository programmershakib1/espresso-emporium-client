import { FaInstagram } from "react-icons/fa";
import CoffeesImgContainer from "./coffeesImgContainer";
import { Link } from "react-router-dom";

const FollowUs = () => {
  return (
    <div>
        <Link className="md:text-xl text-[#1B1A1A] pb-2 font-serif flex justify-center items-center gap-2"><h5>Follow Us Now</h5> <FaInstagram className="text-xl text-rose-500"/></Link>
      <h3 className="md:text-5xl text-4xl text-[#331A15] text-center font-bold font-rancho">
        Follow On Instagram
      </h3>

      <section className="md:w-4/5 w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7 py-14 mb-10">
       <CoffeesImgContainer></CoffeesImgContainer>
      </section>
    </div>
  );
};

export default FollowUs;
