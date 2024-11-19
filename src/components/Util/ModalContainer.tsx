import { createPortal } from "react-dom";
import { useModalState } from "store/Modal";
import ProjectModal from "components/Modal/ProjectModal";
import CertModal from "components/Modal/CertModal";

const ModalLayout = (): JSX.Element => {
  const { setModalName } = useModalState();
  return (
    <div
      className="fixed w-full h-full top-0 bg-[#0000008f] z-20"
      onClick={() => {
        setModalName(null);
      }}
    ></div>
  );
};

const ModalContent = (): JSX.Element => {
  const { modalName } = useModalState();

  const modalContent: { [key: string]: JSX.Element | null } = {
    Tscenping: <ProjectModal />,
    InsteadMemo: <ProjectModal />,
    "Tscenping-V2": <ProjectModal />,
    "전국 부실 아파트 조회": <ProjectModal />,
    "KT Wiz AI 분석 페이지 만들기": <ProjectModal />,
    cert42: <CertModal />,
    snipercert: <CertModal />,
  };

  return (
    <>
      {modalName && (
        <div className="h-4/5 z-30 flex flex-col jusfify-content center fixed top-1/2 left-1/2  xxs:min-w-[280px] xs:min-w-[360px] sm:min-w-[600px] md:min-w-[800px] xl:min-w-[1200px] text-center text-white px-4 py-5 transform -translate-x-1/2 -translate-y-1/2 bg-[#404040] text-xs sm:text-base md:text-lg lg:text-xl xl:text-2xl rounded-2xl">
          {modalContent[modalName]}
        </div>
      )}
    </>
  );
};

const ModalContainer = (): JSX.Element => {
  return (
    <>
      {createPortal(
        <ModalLayout />,
        document.getElementById("modalLayout") as HTMLElement
      )}
      {createPortal(
        <ModalContent />,
        document.getElementById("modalContent") as HTMLElement
      )}
    </>
  );
};

export default ModalContainer;
