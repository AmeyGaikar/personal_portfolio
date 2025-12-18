import BlueSmilyPatch from "../assets/BlueSmilyPatch";
import LineStroke from "../assets/LineStroke";
import LinkArrow from "../assets/LinkArrow";
import GameHub from "../assets/images/GameHub.png";
import SassPage from "../assets/images/SaSS_landing_Page.png";

const MyPortfolio = () => {
  const portFolio = [
    {
      id: 0,
      image: GameHub,
      title: "Game hub",
      subtitLe: "Discover new and upcoming games",
    },
    {
      id: 1,
      image: SassPage,
      title: "Sass Landing Page",
      subtitLe: "Discover new and upcoming games",
    },
  ];

  return (
    <>
      <div className="flex mx-auto max-w-fit gap-3 relative mb-10">
        <p className="text-4xl md:text-6xl font-semibold self-center">
          My Portfolio
        </p>
        <BlueSmilyPatch />
        <LineStroke className="absolute bottom-3 right-17 md:right-24.5 md:size-62 md:-bottom-30" />
      </div>
      <div className="grid grid-cols-1 auto-rows-min px-10 gap-3 md:grid-cols-2 mb-20 ">
        {portFolio.map((p) => {
          return (
            <div
              className="border-3 bg-[#FFFFFF] px-3 h-[316px] lg:h-[457px] lg:w-[457px] w-[316px] flex flex-col justify-evenly gap-2 mx-auto"
              key={p.id}
            >

              <img
                src={p.image}
                className="w-full h-auto object-bottom border-3 p-2 bg-[#C0C0C0]"
                alt={p.image + "image"}
              />
              <div className="flex gap-3 justify-between">
                <div className="max-w-[83%]">
                  <p className="font-semibold text-xl lg:text-3xl">{p.title}</p>
                  <p className="font-medium">{p.subtitLe}</p>
                </div>
                <LinkArrow />
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default MyPortfolio;
