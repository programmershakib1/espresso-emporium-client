import BlackCoffee from "/src/assets/cups/black-coffee.png";
import HotCoffee from "/src/assets/cups/hot-coffee.png";
import DesignCoffee1 from "/src/assets/cups/design-coffee1.png";
import DesignCoffee2 from "/src/assets/cups/design-coffee-2.png";
import CoffeeCup from "/src/assets/cups/coffee-cup.png";
import LoveCoffee from "/src/assets/cups/Love-coffee.png";
import BlackSpecialCoffee from "/src/assets/cups/black-special-coffee.png";
import SpecialCoffee from "/src/assets/cups/special-coffee.png";

const CoffeesImgContainer = () => {
  return (
    <>
      <figure className="md:w-72 md:h-80">
        <img
          className="w-full h-full rounded-xl"
          src={BlackCoffee}
          alt="Image of Black Coffee"
        />
      </figure>

      <figure className="md:w-72 md:h-80">
        <img
          className="w-full h-full rounded-xl"
          src={HotCoffee}
          alt="Image of Hot Coffee"
        />
      </figure>

      <figure className="md:w-72 md:h-80">
        <img
          className="w-full h-full rounded-xl"
          src={DesignCoffee1}
          alt="Image of Design Coffee 1"
        />
      </figure>

      <figure className="md:w-72 md:h-80">
        <img
          className="w-full h-full rounded-xl"
          src={DesignCoffee2}
          alt="Image of Design Coffee 2"
        />
      </figure>

      <figure className="md:w-72 md:h-80">
        <img
          className="w-full h-full rounded-xl"
          src={CoffeeCup}
          alt="Image of Coffee Cup"
        />
      </figure>

      <figure className="md:w-72 md:h-80">
        <img
          className="w-full h-full rounded-xl"
          src={LoveCoffee}
          alt="Image of Love Coffee"
        />
      </figure>

      <figure className="md:w-72 md:h-80">
        <img
          className="w-full h-full rounded-xl"
          src={BlackSpecialCoffee}
          alt="Image of Black Special Coffee"
        />
      </figure>

      <figure className="md:w-72 md:h-80">
        <img
          className="w-full h-full rounded-xl"
          src={SpecialCoffee}
          alt="Image of Special Coffee"
        />
      </figure>
    </>
  );
};

export default CoffeesImgContainer;
