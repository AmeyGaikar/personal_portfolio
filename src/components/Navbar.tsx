import Vector from "../assets/Vector";
import PinkPatch from "../assets/Pink_Patch";
import { useState } from "react";
import { twMerge } from "tailwind-merge";
import { AnimatePresence, motion } from "motion/react";

const Navbar = () => {
  const navLinks = [
    { label: "About //", href: "#" },
    { label: "Portfolio", href: "#" },
    {
      label: "Hire me",
      href: "https://mail.google.com/mail/?view=cm&to=ameygaikar14@gmail.com",
    },
  ];

  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="relative w-full md:mb-27 ">
        <PinkPatch className="hidden lg:block absolute -top-6 -right-15 -rotate-10" />
        <PinkPatch className="hidden lg:block absolute -bottom-6 -left-20 -rotate-20" />
        <div className="flex justify-center">
          <div className="border-4 my-5 bg-white w-80 lg:w-150 h-auto shadow-[8px_8px_0_#989990]">
            <div className="flex justify-between px-2 items-stretch pr-0">
              <div className="flex flex-col w-full">
                <div className="flex justify-between">
                  {/* logo  */}
                  <div className="flex items-center py-2 ">
                    <Vector />
                    <a className="navBtn">Amey</a>
                  </div>

                  {/* hamburger icon  */}
                  <div className="flex items-center mr-6">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="40"
                      height="40"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-menu lg:hidden"
                      onClick={() => setIsOpen(!isOpen)}
                    >
                      <line
                        x1="3"
                        y1="6"
                        x2="21"
                        y2="6"
                        className={twMerge(
                          "origin-left transition",
                          isOpen && "rotate-45 -translate-y-1"
                        )}
                      ></line>
                      <line
                        x1="3"
                        y1="12"
                        x2="21"
                        y2="12"
                        className={twMerge(isOpen && "hidden")}
                      ></line>
                      <line
                        x1="3"
                        y1="18"
                        x2="21"
                        y2="18"
                        className={twMerge(
                          "origin-left transition",
                          isOpen && "-rotate-45 translate-y-1"
                        )}
                      ></line>
                    </svg>
                  </div>
                </div>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: "auto" }}
                      exit={{ height: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="lg:hidden flex flex-col items-center gap-5 mt-5 mb-5">
                        {navLinks.map((link, index) => {
                          return (
                            <a
                              key={index}
                              href={link.href}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              {link.label}
                            </a>
                          );
                        })}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <div className="hidden lg:flex">
                {navLinks.map((link, index) => {
                  return (
                    <div className="border-l-4 border-black px-5 flex items-center h-full">
                      {
                        <a
                          key={index}
                          href={link.href}
                          className={
                            link.label === "Portfolio"
                              ? "yellowBg relative z-1"
                              : ""
                          }
                        >
                          {link.label}
                        </a>
                      }
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        <div className="hidden lg:block border-3 mt-8"></div>
      </div>
    </>
  );
};

export default Navbar;
