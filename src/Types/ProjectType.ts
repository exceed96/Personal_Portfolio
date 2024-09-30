export type ModalName =
  | "Tscenping"
  | "InsteadMemo"
  | "Tscenping-V2"
  | "weakApart"
  | "cert42"
  | "snipercert"
  | "KT Wiz AI 분석 페이지 만들기"
  | null;

export interface resultTypes {
  title: string;
  content: string;
}

export interface ProjectDataTypes {
  name: string;
  mainImage: string;
  key: string;
  composition: string;
  part: string;
  type: string;
  period: string;
  detail: string;
  stack: string[];
  tool: string[];
  majorFunction: string[];
  myFunction: string[];
  result: resultTypes[];
}
