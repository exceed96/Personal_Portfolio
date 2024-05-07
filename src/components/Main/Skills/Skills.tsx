import HTML from "img/Library/HTML.svg";
import skills from "img/skill.webp";

import SkillsData from "Data/SkillsData";

const Skills = (): JSX.Element => {
  return (
    <section id="skills" className="mt-20">
      <section className="text-4xl font-[Leferi-BlackOblique] border-b-2 border-[#b1b1b1] w-full pb-4 flex items-center">
        <img src={skills} className="w-8 sm:w-10 md:w-12 mr-4" />
        <h2 className="text-[#eeffff] text-xl sm:text-4xl">Skills</h2>
      </section>
      <ul className="mt-4 flex flex-col">
        <li className="text-white w-full text-center">
          <span className="font-[Leferi-BlackOblique] sm:text-xl md:text-2xl lg:text-3xl border-b-4">
            FrontEnd
          </span>
          <ul className="flex justify-start flex-col sm:flex-row sm:flex-wrap md:mt-8">
            {SkillsData.stacks.map((stack, index) => (
              <li
                key={index}
                className="flex my-4 w-full md:w-1/2 hover:scale-110 py-3 px-8 md:px-4 hover:rounded-2xl hover:bg-[#1a1a1a] duration-300"
              >
                <section className="w-1/6 md:w-2/5 flex flex-col items-center">
                  <img
                    src={stack.img}
                    className="w-12 sm:w-16 md:w-20 lg:w-24 rounded-xl duration-300"
                  />
                  <span className="text-xs md:text-base font-[Leferi-BlackOblique]">
                    {stack.name}
                  </span>
                </section>
                <ul className="ml-8 w-5/6 md:w-3/5">
                  {stack.detail.map((detail, index) => (
                    <li
                      key={index}
                      className="text-base font-[Apple-Medium] list-disc text-start mt-1 break-all"
                    >
                      {detail}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </li>
        <li className="text-white text-center mt-12">
          <span className="font-[Leferi-BlackOblique] sm:text-xl md:text-2xl lg:text-3xl border-b-4">
            Tools
          </span>
          <ul className="flex flex-col md:flex-row md:flex-wrap mb-8 md:mt-8">
            {SkillsData.tools.map((tool, index) => (
              <li
                key={index}
                className="flex my-4 md:w-1/2 hover:scale-110 py-3 px-8 md:px-4 hover:rounded-2xl hover:bg-[#1a1a1a] duration-300 items-center"
              >
                <section className="w-1/6 md:w-2/5 flex flex-col items-center">
                  <img
                    src={tool.img}
                    className="w-12 sm:w-16 md:w-20 lg:w-24 rounded-xl duration-300"
                  />
                  <span className="text-xs md:text-base font-[Leferi-BlackOblique]">
                    {tool.name}
                  </span>
                </section>
                <ul className="ml-8 w-5/6 md:w-3/5">
                  {tool.detail.map((detail, index) => (
                    <li
                      key={index}
                      className="text-base font-[Apple-Medium] list-disc text-start mt-1 break-all"
                    >
                      {detail}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </li>
      </ul>
    </section>
  );
};

export default Skills;
