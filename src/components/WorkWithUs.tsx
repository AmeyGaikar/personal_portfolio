import PinkPatch from "../assets/Pink_Patch";
import FancyButton from "../props/FancyButton";

const WorkWithUs = () => {
  return (
    <div className="bg-white border-3  w-[327px] h-[274px] lg:w-[899px] lg:h-[341px] mx-auto mb-20 shadow-[12px_12px_0_#989990] relative">
      <PinkPatch className="absolute size-24 -top-10 right-29"/>
      <div className="flex flex-col justify-center h-full gap-5">
        <p className="font-medium text-lg text-center lg:text-3xl">
          Let's start designing your project
        </p>
        <p className="text-center text-[15px] lg:text-xl">
          Want to see how to transform your brand{" "}
          <span>into a unique style. sent us a message</span>
        </p>
        <div className="w-max mx-auto">
          <FancyButton>See Portfolio</FancyButton>
        </div>
      </div>
    </div>
  );
};

export default WorkWithUs;
