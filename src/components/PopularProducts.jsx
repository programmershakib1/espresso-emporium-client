import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import CoffeeCard from "./CoffeeCard";
import cupImg from "/src/assets/icons/cup.png";

const PopularProducts = () => {
    const loadedCoffees = useLoaderData();
    const [coffees, setCoffees] = useState(loadedCoffees);

  return (
    <div
      className="space-y-5 pb-16"
      style={{
        backgroundImage: "url('/src/assets/more/popular-products.png')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <h3 className="md:text-5xl text-4xl text-[#331A15] pb-5 text-center font-bold font-rancho">
        Our Popular Products
      </h3>

      <Link to="/addCoffee">
        <button className="btn bg-[#E3B577] mx-auto text-2xl font-medium font-rancho text-white border-2 border-gray-800 flex justify-center items-center gap-2">
          <span>Add Coffee</span>
          <img
            className="w-6 h-6"
            src={cupImg}
            alt="image of Cup with Coffee"
          />
        </button>
      </Link>

      <div className="lg:w-4/5 w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:pt-2 pt-8">
        {coffees.map((coffee) => (
          <CoffeeCard
            key={coffee._id}
            coffees={coffees}
            setCoffees={setCoffees}
            coffee={coffee}
          ></CoffeeCard>
        ))}
      </div>
    </div>
  );
};

export default PopularProducts;