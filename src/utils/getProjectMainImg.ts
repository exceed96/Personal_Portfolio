import {
  PROJECT_TSCENPING_DATA,
  PROJECT_TSCENPINGV2_DATA,
  PROJECT_INSTEAD_DATA,
  PROJECT_WEAK_DATA,
  PROJECT_KTWIZ_DATA,
} from "Data/Project/ProjectImageData";

export const getProjectMainImg = (name: string) => {
  switch (name) {
    case "InsteadMemo":
      return PROJECT_INSTEAD_DATA;
    case "Tscenping":
      return PROJECT_TSCENPING_DATA;
    case "Tscenping-V2":
      return PROJECT_TSCENPINGV2_DATA;
    case "전국 부실 아파트 조회":
      return PROJECT_WEAK_DATA;
    case "KT Wiz AI 분석 페이지 만들기":
      return PROJECT_KTWIZ_DATA;
  }
};
