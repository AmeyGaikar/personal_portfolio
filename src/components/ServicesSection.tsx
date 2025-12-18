// import { twMerge } from "tailwind-merge";
import BlueCircle from "../assets/BlueCircle";
import OrangeCircle from "../assets/OrangeCircle";
import PinkPatch from "../assets/Pink_Patch";
import PurpleCircle from "../assets/PurpleCircle";
import Smily from "../assets/Smily";
import YellowCircle from "../assets/YellowCircle";

const ServicesSection = () => {
  // const spanOne = "border-3 border-b-0 p-5 row-span-1 text-2xl font-medium";

  return (
    <>
      <div className="flex justify-center md:justify-start px-3">
        <p className="font-medium text-5xl max-w-80 mx-auto text-left mb-18 md:mx-0 md:px-8 md:max-w-170">
          Services we're providing that derive 99% result
        </p>
        <Smily className="self-start size-16" />
      </div>

      <div className="grid grid-cols-1 auto-rows-auto px-3 md:grid-cols-6 md:grid-rows-6 md:h-[777px] md:pl-8 md:pr-0 pb-20 relative">

        <PinkPatch className="absolute size-30  -right-15 -top-14"/>  

        <div className="firstDiv">
          <p className="title">10</p> <p className="subtitle">Projects</p>
        </div>

        <div className="secondDiv">
          <p className="title">100K+</p> <p className="subtitle">generated</p>
        </div>

        <div className="thirdDiv">
          <YellowCircle />
          <p className="title">User research</p>
          <p className="subtitle">
            Services we're providing that derive 99% result
          </p>
        </div>

        <div className="fourthDiv">Learn More</div>

        <div className="fifthDiv">
          <PurpleCircle />
          <p className="title">Wireframing</p>
          <p className="subtitle">
            Services we're providing that derive 99% result
          </p>
        </div>

        <div className="sixthDiv">Learn More</div>

        <div className="seventhDiv">
          <OrangeCircle />
          <p className="title">UI designing</p>
          <p className="subtitle">
            Services we're providing that derive 99% result
          </p>
        </div>

        <div className="eightDiv">
          Learn More
        </div>

        <div className="ninthDiv">
          <BlueCircle />
          <p className="font-bold text-3xl">Prototyping</p>
          <p className="text-xl font-medium">
            Services we're providing that derive 99% result
          </p>
        </div>

        <div className="tenthDiv">Learn More</div>
      </div>
    </>
  );
};

export default ServicesSection;
