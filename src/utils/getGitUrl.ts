export const getGitUrl = (name: string) => {
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
