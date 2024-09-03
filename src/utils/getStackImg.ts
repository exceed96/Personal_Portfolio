import React from "img/Library/React.svg";
import JavaScript from "img/Library/JavaScript.svg";
import Redux from "img/Library/Redux.svg";
import CssModules from "img/Library/CssModules.svg";
import Axios from "img/Library/Axios.svg";
import Next from "img/Library/Next.svg";
import TypeScript from "img/Library/TypeScript.svg";
import SCSS from "img/Library/SCSS.svg";
import Zustand from "img/Library/Zustand.png";
import Socket from "img/Library/Socket.svg";
import TailWind from "img/Library/Tailwind.svg";
import ReactQuery from "img/Library/ReactQuery.svg";
import Express from "img/Library/Express.svg";

export const getStackImg = (stackName: string): string => {
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
