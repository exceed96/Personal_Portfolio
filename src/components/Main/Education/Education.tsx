import education from "img/education.webp";
import school from "img/school.svg";
import etc from "img/etc.svg";
import {
  EDUCATION_42PROJECT_DATA,
  EDUCATION_NEXTPROJECT_DATA,
} from "Data/Education/EducationProjectData";
import { EducationProjectDataType } from "Types/EducationType";
import certification42 from "img/sangyeki.png";
import sniper from "img/sniper.png";
import Github from "img/Tools/Github.svg";

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
          <div className="text-xl font-[Leferi-Bold] mt-4 text-[#eeffff] flex flex-col gap-10">
            <details>
              <summary className="text-base sm:text-lg md:text-xl lg:text-2xl cursor-pointer">
                <span className="hover:ml-10 duration-200 transition-all">
                  42Seoul (2022.03.07 ~ 2023.12.29)
                </span>
              </summary>
              <section className="text-xs xs:text-sm sm:text-base md:text-lg">
                <section className="font-[Pretendard] bg-[#212121] p-3 rounded-md border-[1px] border-[#2e2e2e] shadow-[0_0px_8px_0px_rgba(255,255,255,0.1)]">
                  {EDUCATION_42PROJECT_DATA.detail}
                </section>
                <ul className="grid grid-cols-2 mt-5">
                  {EDUCATION_42PROJECT_DATA.project.map(
                    (project: EducationProjectDataType, index) => (
                      <li className="flex flex-col mb-5" key={index}>
                        <details className="text-base md:text-lg educationDetail">
                          <summary className="flex items-center">
                            <span className="mr-1 xs:mr-3 text-sm md:text-xl text-[#dfffff] font-[Apple-Light]">
                              {project.title}
                            </span>
                            {project.github && (
                              <a href={project.github} target="blank">
                                <img
                                  src={Github}
                                  alt="github"
                                  className="w-4 xs:w-5 sm:w-6 md:w-7 rounded-[4px]"
                                />
                              </a>
                            )}
                          </summary>
                          <section className="ml-3 break-words text-sm md:text-lg font-[Apple-Medium]">
                            📜&nbsp;{project.summary}
                          </section>
                        </details>
                      </li>
                    )
                  )}
                  <li>
                    <details className="text-base">
                      <summary>수료증</summary>
                      <img
                        src={certification42}
                        className="w-full md:w-1/2 "
                        alt="42seoul certification"
                      />
                    </details>
                  </li>
                </ul>
              </section>
            </details>
            <details>
              <summary className="text-base sm:text-lg md:text-xl lg:text-2xl cursor-pointer">
                <span className="hover:ml-10 duration-200 transition-all">
                  프로젝트 캠프 Next.JS (2024.05.24 ~ 2024.08.02)
                </span>
              </summary>
              <section className="text-xs xs:text-sm sm:text-base md:text-lg">
                <section className="font-[Pretendard] bg-[#212121] p-3 rounded-md border-[1px] border-[#2e2e2e] shadow-[0_0px_8px_0px_rgba(255,255,255,0.1)]">
                  {EDUCATION_NEXTPROJECT_DATA.detail}
                </section>
                <ul className="grid grid-cols-2 mt-5">
                  {EDUCATION_NEXTPROJECT_DATA.project.map(
                    (project: EducationProjectDataType, index) => (
                      <li className="flex flex-col mb-5" key={index}>
                        <details className="text-base md:text-lg educationDetail">
                          <summary className="flex items-center">
                            <span className="mr-1 xs:mr-3 text-sm md:text-xl text-[#dfffff] font-[Apple-Light]">
                              {project.title}
                            </span>
                            {project.github && (
                              <a href={project.github} target="blank">
                                <img
                                  src={Github}
                                  alt="github"
                                  className="w-4 xs:w-5 sm:w-6 md:w-7 rounded-[4px]"
                                />
                              </a>
                            )}
                          </summary>
                          <section className="ml-3 break-words text-sm md:text-lg font-[Apple-Medium]">
                            📜&nbsp;{project.summary}
                          </section>
                        </details>
                      </li>
                    )
                  )}
                  <li>
                    <details className="text-base">
                      <summary>수료증</summary>
                      <img
                        src={sniper}
                        className="w-full md:w-1/2 "
                        alt="42seoul certification"
                      />
                    </details>
                  </li>
                </ul>
              </section>
            </details>
          </div>
        </li>
      </ul>
    </section>
  );
};

export default Education;
