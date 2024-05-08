export type ModalName =
  | "tscenping"
  | "insteadMemo"
  | "tscenpingv2"
  | "weakApart"
  | null;

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
  result: string[];
}
