import Arrow from "../assets/Arrow";
import PinkPatch from "../assets/Pink_Patch";
import Smily from "../assets/Smily";
import PinkSmily from "../assets/PinkSmily";
import FancyButton from "../props/FancyButton";
import DisplayImage from "../assets/DisplayImage";

const Hero = () => {
  return (
    <>
      <div className="flex justify-center lg:px-10 mb-20  ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-36 md:gap-10 w-7xl">
          {/* first grid element  */}
          <div className="flex justify-center md:justify-end w-full max-w-81 mx-auto lg:max-w-max">
            <div className="flex flex-col items-center">
              {/* pink patch  */}
              <PinkSmily />
              <p className="text-4xl md:text-5xl lg:text-7xl font-semibold text-center">
                I design ✍️ top notch <span className="yellowBg relative z-1">websites</span>
              </p>
              <FancyButton>
                See portfolio
              </FancyButton>
            </div>
          </div>

          {/* smily box image  */}
          <div className="flex justify-center lg:justify-end relative">
            {/* amey text  */}
            <div className="flex absolute right-44 -top-14 -rotate-23">
              <Smily />
              <p className="font-semibold text-xl">AMEY</p>
              <Arrow className="absolute -right-5" />
            </div>
            <DisplayImage />
          </div>
        </div>
      </div>
      <PinkPatch className="relative size-23 right-8 top-6"/>
    </>
  );
};

export default Hero;
