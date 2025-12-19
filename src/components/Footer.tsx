import Logo from "../props/Logo";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaThreads } from "react-icons/fa6";
6
const Footer = () => {
  return (
    <div className="flex flex-col lg:flex-row lg:justify-evenly border-3 py-6 items-center gap-5">
      <div className="w-max"><Logo/></div>
      <p className="text-xl w-max">Portfolio @2026</p>
      <div className="flex w-max gap-18">
        <FaInstagram className="size-8" />
        <FaXTwitter className="size-8" />
        <FaThreads className="size-8" />
      </div>
    </div>
  );
};

export default Footer;
