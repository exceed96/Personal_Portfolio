import profileImage from "img/포트폴리오사진.jpeg";
import birth from "img/birth.svg";
import phone from "img/phone.svg";
import velog from "img/velog.svg";
import github from "img/github.svg";
import email from "img/email.svg";
import project from "img/project.webp";
import Project from "./Project/Project";
import AboutMe from "./AboutMe/AboutMe";
import Education from "./Education/Education";
import Skills from "./Skills/Skills";
import PROJECT_DATA from "Data/Project/ProjectData";

const Main = (): JSX.Element => {
  const ListStyle =
    "flex items-center text-2xl text-[#D4D4D4] font-[Apple-Bold] mt-8";

  const infoStyle = "text-base sm:text-lg md:text-2xl";

  return (
    <main className="mt-40 py-8 px-8 w-screen max-w-[1080px]">
      <section className="px-4">
        <h1 className="flex flex-col sm:flex-row text-2xl text-[#eeffff] font-[Leferi-BlackOblique]">
          <span>김상엽&nbsp;&nbsp;</span>
          <span className="mt-2 sm:mt-0">Frontend Developer</span>
        </h1>
        <h2 className="text-xl sm:text-2xl md:text-3xl text-[#ffffff] py-8 font-[Apple-Bold]">
          단순한 웹 개발이 아닌 사용자에게 가치를 제공하기 위해 배우고 성장하는
          개발자, 김상엽입니다.
        </h2>
      </section>
      <section className="flex flex-col items-center sm:flex-row sm:items-start w-full mt-8">
        <img
          src={profileImage}
          className="w-80 sm:w-70 md:w-60 rounded-[2rem]"
          alt="profile img"
        />
        <ul className="flex flex-col self-start text-3xl h-full w-full sm:ml-12 font-[Leferi-BlackOblique]">
          <section className="w-full border-b-2 border-gray-400 pb-4 mt-4 md:mt-0">
            <strong className="text-[#eeffff] text-xl sm:text-4xl">
              Contact & Info
            </strong>
          </section>
          <li className={ListStyle}>
            <img src={birth} className="mr-4 w-6" alt="birth" />
            <span className={infoStyle}>1996.04.24</span>
          </li>
          <li className={ListStyle}>
            <img src={phone} className="mr-4 w-6" alt="phone number" />
            <span className={infoStyle}>010-5388-9359</span>
          </li>
          <li className={ListStyle}>
            <img src={velog} className="mr-4 w-6" alt="blog" />
            <a href="https://velog.io/@exceed96" className={infoStyle}>
              https://velog.io/@exceed96
            </a>
          </li>
          <li className={ListStyle}>
            <img src={github} className="mr-4 w-6" alt="github" />
            <a href="https://github.com/exceed96" className={infoStyle}>
              https://github.com/exceed96
            </a>
          </li>
          <li className={ListStyle}>
            <img src={email} className="mr-4 w-6" alt="email" />
            <span className={infoStyle}>exceed_96@naver.com</span>
          </li>
        </ul>
      </section>
      <AboutMe />
      <Education />
      <Skills />
      <section id="project" className="mt-20">
        <section className="text-4xl font-[Leferi-BlackOblique] border-b-2 border-[#b1b1b1] w-full pb-4 flex items-center">
          <img
            src={project}
            className="w-8 sm:w-10 md:w-12 mr-4"
            alt="my projects"
          />
          <h2 className="text-[#eeffff] text-xl sm:text-4xl">Project</h2>
        </section>
        <ul className="mt-16">
          {PROJECT_DATA.map((projectData) => (
            <Project
              name={projectData.name}
              mainImage={projectData.mainImage}
              composition={projectData.composition}
              part={projectData.part}
              key={projectData.key}
              type={projectData.type}
              period={projectData.period}
              detail={projectData.detail}
              stack={projectData.stack}
              tool={projectData.tool}
              majorFunction={projectData.majorFunction}
              myFunction={projectData.myFunction}
              result={projectData.result}
            />
          ))}
        </ul>
      </section>
    </main>
  );
};

export default Main;
