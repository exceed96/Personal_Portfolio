import { useModalState } from "store/Modal";
import React from "img/Library/React.svg";
import JavaScript from "img/Library/JavaScript.svg";
import Redux from "img/Library/Redux.svg";
import CssModules from "img/Library/CssModules.svg";
import Axios from "img/Library/Axios.svg";
import Next from "img/Library/Next.svg";
import TypeScript from "img/Library/TypeScript.svg";
import SCSS from "img/Library/SCSS.svg";
import Zustand from "img/Library/Zustand.svg";
import Socket from "img/Library/Socket.svg";
import TailWind from "img/Library/Tailwind.svg";
import ReactQuery from "img/Library/ReactQuery.svg";
import Express from "img/Library/Express.svg";
import Firebase from "img/Tools/Firebase.svg";
import Github from "img/Tools/Github.svg";
import Figma from "img/Tools/Figma.svg";
import Docker from "img/Tools/Docker.svg";
import Vercel from "img/Tools/Vercel.svg";
import AWS from "img/Tools/AWS.svg";
import ProjectCheck from "img/ProjectModal/ProjectCheck.svg";
import ProjectChecked from "img/ProjectModal/ProjectChecked.svg";
import ProjectResult from "img/ProjectModal/ProjectResult.svg";
import ProjectAll from "img/ProjectModal/ProjectAll.svg";
import ProjectMe from "img/ProjectModal/ProjectMe.svg";
import ImageGallery from "react-image-gallery";

import {
  PROJECT_TSCENPING_DATA,
  PROJECT_TSCENPINGV2_DATA,
  PROJECT_INSTEAD_DATA,
  PROJECT_WEAK_DATA,
  PROJECT_KTWIZ_DATA,
} from "Data/Project/ProjectImageData";

import { resultTypes } from "Types/ProjectType";

const ProjectModal = (): JSX.Element => {
  const { modalProps } = useModalState();

  const listStyle =
    "flex items-start flex-col md:flex-row text-base mt-4 xs:mt-6 sm:mt-8";
  const listTitleStyle =
    "font-[Leferi-BlackOblique] text-[#82AAFF] md:mr-4 text-base xs:text-lg lg:text-xl";
  const listSectionStyle = "md:w-1/4 flex items-center self-center";
  const listSpanStyle =
    "text-start md:w-3/4 self-center font-[Apple-Black] text-base sm:text-lg md:text-xl md:ml-8";

  const functionTitleStyle =
    "self-start text-base sm:text-lg md:text-xl font-[Leferi-BlackOblique] flex items-center mb-2";
  const functionTitleImgStyle = "mr-2 xs:mr-3 sm:mr-4 w-4 h-4 sm:w-6 sm:h-6";

  const stackAndToolContainerStyle =
    "grid grid-cols-4 sm:flex sm:flex-wrap w-full md:w-3/4 md:mt-2 gap-4 sm:ml-5 mt-2 sm:mt-0";

  const getToolImgSrc = (toolName: string): string => {
    switch (toolName) {
      case "Figma":
        return Figma;
      case "Github":
        return Github;
      case "Firebase":
        return Firebase;
      case "Docker":
        return Docker;
      case "Vercel":
        return Vercel;
      case "AWS":
        return AWS;
      default:
        return "";
    }
  };

  const getImgSrc = (stackName: string): string => {
    switch (stackName) {
      case "React":
        return React;
      case "JavaScript":
        return JavaScript;
      case "Redux":
        return Redux;
      case "CssModules":
        return CssModules;
      case "Axios":
        return Axios;
      case "Next":
        return Next;
      case "TypeScript":
        return TypeScript;
      case "SCSS":
        return SCSS;
      case "Zustand":
        return Zustand;
      case "Socket":
        return Socket;
      case "Tailwind":
        return TailWind;
      case "ReactQuery":
        return ReactQuery;
      case "Express":
        return Express;
      default:
        return "";
    }
  };

  const getGithubUrl = (name: string) => {
    switch (name) {
      case "InsteadMemo":
        return "https://github.com/Instead-Memory/Instead-Memory";
      case "Tscenping":
        return "https://github.com/tscenping";
      case "Tscenping-V2":
        return "https://github.com/tscenping/tscenping";
      case "전국 부실아파트 조회":
        return "https://github.com/poorapartment/FE";
      case "KT Wiz AI 분석 페이지 만들기":
        return "https://github.com/KT-Kimbu-net";
      default:
        return "";
    }
  };

  const getProjectImgSrc = (name: string) => {
    switch (name) {
      case "InsteadMemo":
        return PROJECT_INSTEAD_DATA;
      case "Tscenping":
        return PROJECT_TSCENPING_DATA;
      case "Tscenping-V2":
        return PROJECT_TSCENPINGV2_DATA;
      case "전국 부실아파트 조회":
        return PROJECT_WEAK_DATA;
      case "KT Wiz AI 분석 페이지 만들기":
        return PROJECT_KTWIZ_DATA;
    }
  };

  const projectImg = getProjectImgSrc(modalProps!.name) || PROJECT_INSTEAD_DATA;

  return (
    <section className="flex flex-col items-start h-full sm:h-[1080px] overflow-y-auto scrollbar-hide">
      <section className="flex w-full flex-col md:flex-col lg:flex-col xl:flex-col">
        <section className="w-full mr-10 p-1 sm:p-2 bg-black rounded-3xl">
          <ImageGallery showPlayButton={false} items={projectImg} />
        </section>
        <ul className="mt-8">
          <li className="flex flex-col items-center md:flex-row mt-4 2xl:mt-0">
            <section className={listSectionStyle}>
              <span className={listTitleStyle}>Title</span>
            </section>
            <span className="w-full md:w-3/4 font-[Leferi-BlackOblique] text-base sm:text-2xl md:text-3xl">
              "{modalProps?.name}"
            </span>
          </li>
          <li className={listStyle}>
            <section className={listSectionStyle}>
              <span className={listTitleStyle}>Detail</span>
            </section>
            <span className="text-start w-full md:w-3/4 break-all md:ml-8 text-sm md:text-base">
              {modalProps?.detail}
            </span>
          </li>
          <li className={listStyle}>
            <section className={listSectionStyle}>
              <span className={listTitleStyle}>Period</span>
            </section>
            <span className={listSpanStyle}>{modalProps?.period}</span>
          </li>
          <li className={listStyle}>
            <section className={listSectionStyle}>
              <span className={listTitleStyle}>My Part</span>
            </section>
            <span
              className={`md:text-start w-full md:w-3/4 md:self-center text-xl md:ml-8 font-[Apple-Black]`}
            >
              {modalProps?.part}
            </span>
          </li>
          <li className={listStyle}>
            <section className={listSectionStyle}>
              <span className={listTitleStyle}>Type</span>
            </section>
            <span className={listSpanStyle}>{modalProps?.type}</span>
          </li>
          <li className={listStyle}>
            <section className={listSectionStyle}>
              <span className={listTitleStyle}>Composition</span>
            </section>
            <span className={listSpanStyle}>{modalProps?.composition}</span>
          </li>
          <li className={listStyle}>
            <section className={listSectionStyle}>
              <span className={listTitleStyle}>Stack</span>
            </section>
            <ul className={stackAndToolContainerStyle}>
              {modalProps?.stack.map((stack) => (
                <li className="flex justify-center">
                  <img
                    src={getImgSrc(stack)}
                    className="w-12 xs:w-14 rounded-2xl"
                    alt="project imgs"
                  />
                </li>
              ))}
            </ul>
          </li>
          <li className={listStyle}>
            <section className={listSectionStyle}>
              <span className={listTitleStyle}>Tool</span>
            </section>
            <ul className={stackAndToolContainerStyle}>
              {modalProps?.tool.map((tool) => (
                <li className="flex flex-col items-center">
                  <img
                    src={getToolImgSrc(tool)}
                    className="w-12 xs:w-14 rounded-2xl"
                    alt="project tool"
                  />
                  {tool === "Github" && (
                    <a
                      target="__blank"
                      href={getGithubUrl(modalProps.name)}
                      className="text-sm font-[Apple-Black]"
                    >
                      바로가기
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </li>
          {/* <li className={listStyle}>
            <section className={listSectionStyle}>
              <span className={listTitleStyle}>Link</span>
            </section>
            <span>전국 부실아파트 조회</span>
          </li> */}
        </ul>
      </section>
      <section className="flex flex-col sm:flex-row w-full mt-12">
        <section className="w-full sm:w-1/2 flex flex-col items-start">
          <h3 className={functionTitleStyle}>
            <img
              src={ProjectAll}
              className={functionTitleImgStyle}
              alt="project major work"
            />
            주요 기능
          </h3>
          <ul className="mt-2">
            {modalProps?.majorFunction.map((major) => (
              <li className="text-sm md:text-base text-[#eeffff] text-start flex mb-2">
                <img
                  src={ProjectCheck}
                  className="mr-2 xs:mr-3 sm:mr-4 w-4 h-4 sm:w-6 sm:h-6"
                  alt="major work list icon"
                />
                <span>{major}</span>
              </li>
            ))}
          </ul>
        </section>
        <section className="w-full sm:w-1/2 flex flex-col items-start mt-4 sm:mt-0">
          <h3 className={functionTitleStyle}>
            <img
              src={ProjectMe}
              className={functionTitleImgStyle}
              alt="project my work"
            />
            맡은 기능
          </h3>
          <ul className="mt-2">
            {modalProps?.myFunction.map((my) => (
              <li className="text-sm md:text-base text-[#eeffff] text-start flex mb-2">
                <img
                  src={ProjectChecked}
                  className="mr-2 xs:mr-3 sm:mr-4 w-4 h-4 sm:w-6 sm:h-6 self-start"
                  alt="my work list icon"
                />
                <span>{my}</span>
              </li>
            ))}
          </ul>
        </section>
      </section>
      <section className="flex flex-col mt-8">
        <section className="flex items-center mb-2">
          <img src={ProjectResult} className="mr-4" alt="project result" />
          <h3 className="font-[Leferi-BlackOblique]  text-base sm:text-lg md:text-xl">
            Result
          </h3>
        </section>
        <ul>
          {modalProps?.result.map((result: resultTypes, index) => (
            <li
              key={index}
              className="text-sm md:text-base font-[Apple-Medium] text-start mb-10 list-disc"
            >
              <details className="text-white">
                <summary className="font-[Apple-Black] sm:text-base md:text-lg text-[#eafefe]">
                  {result.title}
                </summary>
                {result.content}
              </details>
            </li>
          ))}
        </ul>
      </section>
    </section>
  );
};

export default ProjectModal;
