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
import Firebase from "img/Tools/Firebase.svg";
import Github from "img/Tools/Github.svg";
import Figma from "img/Tools/Figma.svg";

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
} from "Data/Project/ProjectImageData";

const ProjectModal = (): JSX.Element => {
  const { modalProps } = useModalState();

  const listStyle = "flex items-start flex-col md:flex-row text-base mt-8";
  const listTitleStyle =
    "font-[Leferi-BlackOblique] text-[#82AAFF] md:mr-4 text-xl";
  const listSectionStyle = "md:w-1/4 flex items-center self-center";
  const listSpanStyle =
    "text-start md:w-3/4 self-center font-[Apple-Black] text-xl md:ml-8";

  const getToolImgSrc = (toolName: string): string => {
    switch (toolName) {
      case "Figma":
        return Figma;
      case "Github":
        return Github;
      case "Firebase":
        return Firebase;
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
    }
  };

  const projectImg = getProjectImgSrc(modalProps!.name) || PROJECT_INSTEAD_DATA;

  return (
    <section className="flex flex-col items-start h-[480px] sm:h-[1080px] overflow-y-auto scrollbar-hide">
      <section className="flex w-full flex-col md:flex-col lg:flex-col xl:flex-col">
        <section className="w-full mr-10 p-1 sm:p-3 md:p-4 lg:p-5 bg-black rounded-3xl">
          <ImageGallery showPlayButton={false} items={projectImg} />
        </section>
        <ul className="mt-8">
          <li className="flex flex-col items-center md:flex-row mt-4 2xl:mt-0">
            <section className={listSectionStyle}>
              <span className={listTitleStyle}>Title</span>
            </section>
            <span className="w-3/4 font-[Leferi-BlackOblique] text-lg sm:text-xl md:text-2xl lg:text-3xl">
              "{modalProps?.name}"
            </span>
          </li>
          <li className={listStyle}>
            <section className={listSectionStyle}>
              <span className={listTitleStyle}>Detail</span>
            </section>
            <span className="text-start w-full md:w-3/4 break-all md:ml-8">
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
            <ul className="flex flex-wrap w-full md:w-3/4">
              {modalProps?.stack.map((stack) => (
                <li className="px-4 pb-2">
                  <img
                    src={getImgSrc(stack)}
                    className="w-14 rounded-2xl"
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
            <ul className="flex flex-wrap w-full md:w-3/4">
              {modalProps?.tool.map((tool) => (
                <li className="px-4 pb-2">
                  <img
                    src={getToolImgSrc(tool)}
                    className="w-14 rounded-2xl"
                    alt="project tool"
                  />
                </li>
              ))}
            </ul>
          </li>
        </ul>
      </section>
      <section className="flex flex-col sm:flex-row w-full mt-8">
        <section className="w-full sm:w-1/2 flex flex-col items-start">
          <h3 className="self-start font-[Leferi-BlackOblique] flex ">
            <img src={ProjectAll} className="mr-4" alt="project major work" />
            주요 기능
          </h3>
          <ul className="mt-2">
            {modalProps?.majorFunction.map((major) => (
              <li className="text-base text-[#eeffff] text-start flex mb-2">
                <img
                  src={ProjectCheck}
                  className="mr-4"
                  alt="major work list icon"
                />
                {major}
              </li>
            ))}
          </ul>
        </section>
        <section className="w-full sm:w-1/2 flex flex-col items-start mt-4 sm:mt-0">
          <h3 className="self-start font-[Leferi-BlackOblique] flex">
            <img src={ProjectMe} className="mr-4" alt="project my work" />
            맡은 기능
          </h3>
          <ul className="mt-2">
            {modalProps?.myFunction.map((my) => (
              <li className="text-base text-[#eeffff] text-start flex mb-2 items-center">
                <img
                  src={ProjectChecked}
                  className="mr-4"
                  alt="my work list icon"
                />
                {my}
              </li>
            ))}
          </ul>
        </section>
      </section>
      <section className="flex flex-col mt-8">
        <section className="flex items-center">
          <img src={ProjectResult} className="mr-4" alt="project result" />
          <h3 className="font-[Leferi-BlackOblique]">Result</h3>
        </section>
        <ul className="list-disc">
          {modalProps?.result.map((result: string, index) => (
            <li
              key={index}
              className="text-base text-[Apple-Medium] text-start mt-5 list-disc"
            >
              {result}
            </li>
          ))}
        </ul>
      </section>
    </section>
  );
};

export default ProjectModal;
