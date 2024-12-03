import profileImage from "img/포트폴리오사진.jpeg";
import Project from "./Project/Project";
import AboutMe from "./AboutMe/AboutMe";
import Education from "./Education/Education";
import Skills from "./Skills/Skills";
import ContactAndInfo from "./ContactAndInfo/ContactAndInfo";

const Main = (): JSX.Element => {
  return (
    <main className="mt-24 lg:mt-32 xl:mt-40 py-2 px-2 sm:py-8 sm:px-8 w-screen max-w-[1080px]">
      <section className="px-2 sm:px-3 md:px-4">
        <h1 className="flex flex-col sm:flex-row text-xl xs:text-2xl sm:text-3xl md:text-4xl text-[#eeffff] font-[Leferi-BlackOblique] w-full">
          <span>김상엽&nbsp;&nbsp;</span>
          <span className="mt-2 sm:mt-0">Frontend Developer</span>
        </h1>
        <h2 className="xs:text-xl sm:text-2xl md:text-3xl text-[#ffffff] py-8 font-[Apple-Bold]">
          단순한 웹 개발이 아닌 사용자에게 가치를 제공하기 위해 배우고 성장하는
          개발자, 김상엽입니다.
        </h2>
      </section>
      <section className="flex flex-col items-center sm:flex-row w-full mt-8">
        <img
          src={profileImage}
          className="w-64 sm:w-50 md:w-60 rounded-[2rem] flex"
          alt="profile img"
          loading="lazy"
        />
        <ContactAndInfo />
      </section>
      <AboutMe />
      <Education />
      <Skills />
      <Project />
    </main>
  );
};

export default Main;
