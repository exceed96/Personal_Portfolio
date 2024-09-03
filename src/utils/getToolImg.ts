import Firebase from "img/Tools/Firebase.svg";
import Github from "img/Tools/Github.svg";
import Figma from "img/Tools/Figma.svg";
import Docker from "img/Tools/Docker.svg";
import Vercel from "img/Tools/Vercel.svg";
import AWS from "img/Tools/AWS.svg";

export const getToolImg = (toolName: string): string => {
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
