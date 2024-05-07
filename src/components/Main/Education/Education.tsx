import education from "img/education.webp";
import school from "img/school.svg";
import etc from "img/etc.svg";

const Education = (): JSX.Element => {
  const educatoinTitleStyle =
    "text-lg md:text-xl lg:text-2xl font-[Apple-Black] text-[#eeffff]";
  const educationTitleImgStyle = "mr-4 w-6 md:w-7 lg:w-8";
  return (
    <section id="education" className="mt-20">
      <section className="text-4xl font-[Leferi-BlackOblique] border-b-2 border-[#b1b1b1] w-full pb-4 flex items-center">
        <img
          src={education}
          className="w-8 sm:w-10 md:w-12 mr-4"
          alt="my education"
        />
        <h2 className="text-[#eeffff] text-xl sm:text-4xl">Education</h2>
      </section>
      <ul className="mt-4">
        <li className="flex flex-col">
          <section className="flex items-center">
            <img
              src={school}
              className={educationTitleImgStyle}
              alt="my education"
            />
            <h3 className={educatoinTitleStyle}>학력</h3>
          </section>
          <span className="text-xl font-[Leferi-Bold] mt-4 text-[#eeffff] flex flex-col lg:flex-row">
            <span className="text-[15px] sm:text-lg md:text-xl lg:text-2xl">
              호서대학교 전자디스플레이공학 전공&nbsp;
            </span>
            <span className="text-base sm:text-lg md:text-xl lg:text-2xl">
              (2016.02.26 ~ 2022.02.18)
            </span>
          </span>
        </li>
        <li className="flex flex-col mt-10">
          <section className="flex items-center">
            <img
              src={etc}
              className={educationTitleImgStyle}
              alt="my etc education"
            />
            <h3 className={educatoinTitleStyle}>그 외 교육</h3>
          </section>
          <span className="text-xl font-[Leferi-Bold] mt-4 text-[#eeffff] flex flex-col lg:flex-row">
            <span className="text-base sm:text-lg md:text-xl lg:text-2xl">
              42Seoul
            </span>
            <span className="text-base sm:text-lg md:text-xl lg:text-2xl">
              (2022.03.07 ~ 2023.12.29)
            </span>
          </span>
        </li>
      </ul>
    </section>
  );
};

export default Education;
