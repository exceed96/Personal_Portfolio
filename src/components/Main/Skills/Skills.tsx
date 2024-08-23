import { useState, useEffect } from "react";
import skills from "img/skill.webp";
import SkillsData from "Data/SkillsData";
import { Tooltip } from "react-tooltip";

type TooltipStyle = {
  width: string;
  backgroundColor: string;
  color: string;
  fontSize: string;
  textAlign: "left" | "right" | "center" | "justify";
  padding?: string;
};

const Skills = (): JSX.Element => {
  const [tooltipStyle, setTooltipStyle] = useState<TooltipStyle>({
    width: "200px",
    backgroundColor: "white",
    color: "black",
    fontSize: "12px",
    textAlign: "left",
  });

  const skillToolContainerStyle =
    "w-full grid grid-cols-4 sm:flex sm:flex-wrap sm:flex-row sm:justify-between items-center gap-2 xs:gap-4 sm:gap-10 mt-8";

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setTooltipStyle({
          width: "150px",
          backgroundColor: "white",
          color: "black",
          fontSize: "10px",
          textAlign: "left",
        });
      } else if (window.innerWidth < 1024) {
        setTooltipStyle({
          width: "200px",
          backgroundColor: "white",
          color: "black",
          fontSize: "12px",
          textAlign: "left",
        });
      } else {
        setTooltipStyle({
          width: "250px",
          backgroundColor: "white",
          color: "black",
          fontSize: "14px",
          textAlign: "left",
        });
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section id="skills" className="mt-20">
      <section className="text-4xl font-[Leferi-BlackOblique] border-b-2 border-[#b1b1b1] w-full pb-4 flex items-center">
        <img
          src={skills}
          className="w-8 sm:w-10 md:w-12 mr-4"
          alt="project skill section"
        />
        <h2 className="text-[#eeffff] text-xl sm:text-4xl">Skills</h2>
      </section>
      <ul className="mt-4 flex flex-col">
        <li className="text-white w-full text-center">
          <span className="font-[Leferi-BlackOblique] sm:text-xl md:text-2xl lg:text-3xl border-b-4">
            FrontEnd
          </span>
          <ul className={skillToolContainerStyle}>
            {SkillsData.stacks.map((stack, index) => (
              <li
                key={index}
                className="flex items-start hover:scale-110 duration-300 justify-center "
                data-tooltip-id={stack.name}
                data-tooltip-html={stack.detail}
              >
                <section className="w-full flex flex-col items-center">
                  <img
                    src={stack.img}
                    className="w-10 xs:w-12 sm:w-16 md:w-20 lg:w-24 rounded xs:rounded-md sm:rounded-lg md:rounded-xl duration-300"
                    alt="project stack"
                  />
                  <span className="xxs:text-[6px] xs:text-[8px] sm:text-xs md:text-base font-[Leferi-BlackOblique] mt-2 w-full text-wrap">
                    {stack.name}
                  </span>
                </section>
                <Tooltip id={stack.name} place="top" style={tooltipStyle} />
              </li>
            ))}
          </ul>
        </li>
        <li className="text-white text-center mt-12">
          <span className="font-[Leferi-BlackOblique] sm:text-xl md:text-2xl lg:text-3xl border-b-4">
            Tools
          </span>
          <ul className={skillToolContainerStyle}>
            {SkillsData.tools.map((tool, index) => (
              <li
                key={index}
                className="flex items-start hover:scale-110 duration-300"
                data-tooltip-id={tool.name}
                data-tooltip-html={tool.detail}
              >
                <section className="w-full flex flex-col items-center">
                  <img
                    src={tool.img}
                    className="w-10 xs:w-12 sm:w-16 md:w-20 lg:w-24 rounded xs:rounded-md sm:rounded-lg md:rounded-xl duration-300"
                    alt="project tool"
                  />
                  <span className="xxs:text-[8px] sm:text-xs md:text-base font-[Leferi-BlackOblique]">
                    {tool.name}
                  </span>
                </section>
                {/* <ul className="ml-8 w-5/6 md:w-4/5">
                  {tool.detail.map((detail, index) => (
                    <li
                      key={index}
                      className="text-base font-[Apple-Medium] list-disc text-start mt-1 lg:mr-10 break-all"
                    >
                      {detail}
                    </li>
                  ))}
                </ul> */}
                <Tooltip id={tool.name} place="top" style={tooltipStyle} />
              </li>
            ))}
          </ul>
        </li>
      </ul>
    </section>
  );
};

export default Skills;
