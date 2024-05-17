import education from "img/education.webp";
import school from "img/school.svg";
import etc from "img/etc.svg";
import { EDUCATION_PROJECT_DATA } from "Data/Education/EducationProjectData";
import { EducationProjectDataType } from "Types/EducationType";
import certification42 from "img/sangyeki.png";

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
            <details>
              <summary className="text-base sm:text-lg md:text-xl lg:text-2xl cursor-pointer">
                <span className="hover:ml-10 duration-200 transition-all">
                  42Seoul (2022.03.07 ~ 2023.12.29)
                </span>
              </summary>
              <ul>
                {EDUCATION_PROJECT_DATA.map(
                  (project: EducationProjectDataType) => (
                    <li className="flex flex-col mb-5">
                      <details className="text-sm md:text-base educationDetail">
                        <summary className="educationDetail">
                          <span className="mr-3 text-base md:text-lg text-[#dfffff] ">
                            {project.title}
                          </span>
                          {project.github && (
                            <a href={project.github} className="text-base">
                              GitHub 바로가기
                            </a>
                          )}
                        </summary>
                        📜&nbsp;{project.summary}
                      </details>
                    </li>
                  )
                )}
                <li>
                  <details className="text-base">
                    <summary>수료증</summary>
                    <img
                      src={certification42}
                      className="w-1/2 "
                      alt="42seoul certification"
                    />
                  </details>
                </li>
              </ul>
            </details>
          </span>
        </li>
      </ul>
    </section>
  );
};

export default Education;
