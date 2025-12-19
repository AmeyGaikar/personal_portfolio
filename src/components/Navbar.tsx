import Vector from "../assets/Vector";
import PinkPatch from "../assets/Pink_Patch";

const Navbar = () => {
  const navLinks = [
    { label: "About //", href: "#" },
    { label: "Portfolio", href: "#" },
    { label: "Hire me", href: "#" },
  ];

  return (
    <>
      <div className="relative w-full h-30 overflow mb-5 md:mb-27">
        <PinkPatch className="hidden lg:block absolute -top-6 -right-15 -rotate-10" />
        <PinkPatch className="hidden lg:block absolute -bottom-6 -left-20 -rotate-20" />

        <div className="flex justify-center">
          <div className="border-4 my-5 bg-white w-80 lg:w-150 h-18 shadow-[8px_8px_0_#989990]">
            <div className="flex justify-between px-2 items-stretch pr-0">
              <div className="flex items-center py-2">
                <Vector />
                <a className="navBtn">Amey</a>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 72 72"
                width="64px"
                height="64px"
                className="lg:hidden"
              >
                <path d="M56 48c2.209 0 4 1.791 4 4 0 2.209-1.791 4-4 4-1.202 0-38.798 0-40 0-2.209 0-4-1.791-4-4 0-2.209 1.791-4 4-4C17.202 48 54.798 48 56 48zM56 32c2.209 0 4 1.791 4 4 0 2.209-1.791 4-4 4-1.202 0-38.798 0-40 0-2.209 0-4-1.791-4-4 0-2.209 1.791-4 4-4C17.202 32 54.798 32 56 32zM56 16c2.209 0 4 1.791 4 4 0 2.209-1.791 4-4 4-1.202 0-38.798 0-40 0-2.209 0-4-1.791-4-4 0-2.209 1.791-4 4-4C17.202 16 54.798 16 56 16z" />
              </svg>
              <div className="hidden lg:flex">
                {navLinks.map((link, index) => {
                  return (
                    <div className="border-l-4 border-black px-5 flex items-center h-full">
                      {
                        <a
                          key={index}
                          href={link.href}
                          className={
                            link.label === "Portfolio" ? "yellowBg relative z-1" : ""
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
