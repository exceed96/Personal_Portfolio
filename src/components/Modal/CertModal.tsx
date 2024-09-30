import { useModalState } from "store/Modal";
import certification42 from "img/sangyeki.png";
import sniper from "img/sniper.png";

export default function CertModal() {
  const { modalName } = useModalState((state) => ({
    modalName: state.modalName,
  }));

  const certImage: { [key: string]: string } = {
    cert42: certification42,
    snipercert: sniper,
  };

  return (
    <>
      {modalName && (
        <img
          src={certImage[modalName]}
          alt="certification"
          className="w-full h-full"
        />
      )}
    </>
  );
}
