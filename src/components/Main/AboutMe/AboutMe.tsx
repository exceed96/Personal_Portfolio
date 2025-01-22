import aboutMe from "img/aboutMe.webp";
import AboutMeOne from "img/AboutMe/AboutMeOne.svg";
import AboutMeTwo from "img/AboutMe/AboutMeTwo.svg";
import AboutMeThree from "img/AboutMe/AboutMeThree.svg";

const AboutMe = (): JSX.Element => {
  const aboutMeImgStyle = "mr-4 w-6 sm:w-6 md:w-7 lg:w-8";
  const aboutMeTitleStyle = "text-base md:text-xl lg:text-2xl";
  const aboutMeContentStyle =
    "font-[Leferi-Light] text-[#ffffff] my-4 text-base md:text-lg lg:text-xl";

  return (
    <section id="aboutMe" className="mt-20">
      <section className="text-4xl font-[Leferi-BlackOblique] border-b-2 border-[#b1b1b1] w-full pb-4 flex items-center">
        <img src={aboutMe} className="w-8 sm:w-10 md:w-12 mr-4" alt="aboutMe" />
        <h2 className="text-[#eeffff] text-xl sm:text-4xl">About me</h2>
      </section>
      <ul className="mt-4">
        <li className="text-base sm:text-xl md:text-2xl lg:text-3xl font-[Apple-Black] text-white">
          안녕하세요, 프론트엔드 개발자 김상엽입니다.😃
        </li>
        <li className="mt-8 flex flex-col">
          <h3 className="font-[Apple-Bold] text-[#73abfa] text-2xl flex items-start lg:items-center">
            <img
              src={AboutMeOne}
              className={aboutMeImgStyle}
              alt="aboutMe one"
            />
            <span className={aboutMeTitleStyle}>
              동료와의 학습을 통해 배운 것을 정리하고 서로 간의 지식을 나누며
              함께 능동적으로 성장해 왔습니다.
            </span>
          </h3>
          <span className={aboutMeContentStyle}>
            <strong className="underline">동료 학습과 토론</strong>을 통해 함께
            성장했습니다. 그 결과, 저는 프론트엔드 개발 분야의 폭넓은 경험과
            이해를 쌓을 수 있었고, 이를&nbsp;
            <strong className="underline">블로그</strong>를 통해 다른 이들과
            공유하였습니다. 이 과정에서 80개 이상의 포스팅을 작성하여 역량을
            쌓았습니다.
          </span>
        </li>
        <li className="mt-8 flex flex-col">
          <h3 className="font-[Apple-Bold] text-[#73abfa] text-2xl flex items-start lg:items-center">
            <img
              src={AboutMeTwo}
              className={aboutMeImgStyle}
              alt="aboutMe two"
            />
            <span className={aboutMeTitleStyle}>
              다양한 개인 프로젝트, 팀 프로젝트를 통해 개발자로서의 역량을
              쌓았습니다.
            </span>
          </h3>
          <span className={aboutMeContentStyle}>
            20개의 개인 프로젝트와 8개의 팀 프로젝트를 통해 기획 단계의 요구
            사항 분석부터 개발 및 배포까지 다 양한 과정을 경험하였습니다. 이를
            통해 개발 능력과 문제 해결 능력을 키우고 팀원들 과의 협업을 통해 효
            과적인 소 통과 업무 분담의 중요성을 배웠습니다.
          </span>
        </li>
        <li className="mt-8 flex flex-col">
          <h3 className="font-[Apple-Bold] text-[#73abfa] text-2xl flex items-start lg:items-center">
            <img
              src={AboutMeThree}
              className={aboutMeImgStyle}
              alt="aboutMe three"
            />
            <span className={aboutMeTitleStyle}>
              신기술을 습득하고 내재화하는 데 큰 열정을 가지고 있으며, 새로운
              도전을 기꺼이 받아들이고 해결해 나갑니다.
            </span>
          </h3>
          <span className={aboutMeContentStyle}>
            빠르게 변화하는 프론트엔드 기술 스택에 뒤처지지 않기 위해, 끊임없이
            공부하고 구현하며 스스로에게 "왜 요즘은 이걸 쓸까?", "왜 이렇게 하는
            걸까?"라는 질문을 던집니다. 이러한 질문들을 통해 새로운 기술과
            방법론을 내재화하고, 그 과정에서 얻은 통찰을 바탕으로 지속해서
            발전하며 문제를 해결해 나갑니다.
          </span>
        </li>
      </ul>
    </section>
  );
};

export default AboutMe;
