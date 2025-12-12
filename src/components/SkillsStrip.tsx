const SkillsStrip = () => {
  const skillsListt = [
    "React",
    "Typescript",
    "Javascript",
    "SQL",
    "Javascript",
  ];

  return (
    <div className="relative w-full bg-black h-20 z-1 overflow-x-hidden mb-15">
      <div className="flex justify-between items-center gap-7 md:gap-14 lg:gap-30 h-full">
        {skillsListt.map((skill) => {
          return <p className="text-white text-2xl md:text-5xl lg:text-6xl">{skill}</p>;
        })}
      </div>
    </div>
  );
};

export default SkillsStrip;
