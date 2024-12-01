import { FaArrowLeft } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";

const ViewCoffee = () => {
  const coffeeInfo = useLoaderData();
  const { _id, name, price, supplier, taste, category, details, photo } =
    coffeeInfo;

  // console.log(coffeeInfo);

  return (
    <div className="py-12">
      <Link to="/" className="lg:ml-48 ml-5 flex gap-3 items-center">
        <FaArrowLeft className="text-xl" />{" "}
        <span className="font-rancho text-3xl font-bold">Back to Home</span>
      </Link>

      <section className="bg-[#F4F3F0] lg:w-3/4 w-full mx-auto lg:px-32 px-10 py-16 my-14 rounded-xl">
        <div className="flex md:flex-row flex-col justify-between items-center gap-3">
          <figure className="md:w-1/2 md:h-[400px]">
            <img className="md:w-64 w-full h-full" src={photo} alt={name} />
          </figure>

          <div className="md:w-1/2 w-full mt-5">
            <div className="space-y-5">
                <h2 className="text-4xl text-[#331A15] md:text-left text-center font-rancho font-bold">{name}</h2>

                <div className="space-y-3">
                    <h3 className="md:text-base text-lg font-semibold">Name: <span className="text-[#5C5B5B]">{name}</span></h3>

                    <h3 className="md:text-base text-lg font-semibold">Price: <span className="text-[#5C5B5B]">{price}</span></h3>

                    <h3 className="md:text-base text-lg font-semibold">Supplier: <span className="text-[#5C5B5B]">{supplier}</span></h3>

                    <h3 className="md:text-base text-lg font-semibold">Taste: <span className="text-[#5C5B5B]">{taste}</span></h3>

                    <h3 className="md:text-base text-lg font-semibold">Category: <span className="text-[#5C5B5B]">{category}</span></h3>

                    <h3 className="md:text-base text-lg font-semibold">Details: <span className="text-[#5C5B5B]">{details}</span></h3>
                </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ViewCoffee;