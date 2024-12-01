import cupImg from "/src/assets/icons/cup.png";
import successBadgeImg from "/src/assets/icons/success-badge.png";
import coffeeImg from "/src/assets/icons/coffee.png";
import coffeeWithJarImg from "/src/assets/icons/coffee-with-jar.png";

const Review = () => {
    return (
        <div className="bg-[#ECEAE3] p-10">
            <div className="md:w-4/5 w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                <div className="flex flex-col gap-2 md:justify-start justify-center items-center text-center">
                    <figure>
                        <img className="w-20 h-20" src={cupImg} alt="Icon of Cup" />
                    </figure>

                    <h3 className="text-4xl font-medium font-rancho">Awesome Aroma</h3>
                    <p className="text-sm">You will definitely be a fan of the design & aroma of your coffee</p>
                </div>
                <div className="flex flex-col gap-2 md:justify-start justify-center items-center text-center">
                    <figure>
                        <img className="w-20 h-20" src={successBadgeImg} alt="Icon of Success Badge" />
                    </figure>

                    <h3 className="text-4xl font-medium font-rancho">High Quality</h3>
                    <p className="text-sm">We served the coffee to you maintaining the best quality</p>
                </div>
                <div className="flex flex-col gap-2 md:justify-start justify-center items-center text-center">
                    <figure>
                        <img className="w-20 h-20" src={coffeeImg} alt="Icon of Coffee" />
                    </figure>

                    <h3 className="text-4xl font-medium font-rancho">Pure Grades</h3>
                    <p className="text-sm">The coffee is made of the green coffee beans which you will love</p>
                </div>
                <div className="flex flex-col gap-2 md:justify-start justify-center items-center text-center">
                    <figure>
                        <img className="w-20 h-20" src={coffeeWithJarImg} alt="Icon of Coffee inside of the Jar" />
                    </figure>

                    <h3 className="text-4xl font-medium font-rancho">Proper Roasting</h3>
                    <p className="text-sm">Your coffee is brewed by first roasting the green coffee beans</p>
                </div>
            </div>
        </div>
    );
};

export default Review;