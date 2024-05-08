import { ProjectDataTypes } from "Types/ProjectType";
import Detail from "img/Projects/Detail.svg";
import { useModalState } from "store/Modal";
import testImage from "img/Projects/Tscenping/Tscen1.svg";

const Project = (props: ProjectDataTypes): JSX.Element => {
  const { setModalName, setModalProps } = useModalState();

  const modalOpenButtonStyle =
    "mt-8 text-[#eeffff] font-[Leferi-BlackOblique] xxs:text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl bg-[#262626] border-[1px] border-solid border-[#4c5050] rounded-2xl py-2 shadow-md hover:shadow-smallWhite hover:translate-y-[-5px] duration-300";

  return (
    <li className="mb-8 py-2 px-4 sm:py-4 sm:px-6 md:py-6 md:px-8 lg:py-8 lg:px-10 rounded-2xl w-full bg-[#1a1a1a]">
      <section className="flex flex-col w-full">
        <section className="flex flex-col sm:flex-row items-center justify-between">
          <section className="flex flex-col items-center sm:flex-row">
            <strong className="font-[Leferi-BlackOblique] text-xl sm:text-2xl md:text-3xl lg:text-4xl text-[#eeffff]">
              "{props.name}"
            </strong>
            <strong className="mt-2 lg:mt-0 lg:ml-4 font-[Leferi-BlackOblique] text-[#eeffff]">
              {props.period}
            </strong>
          </section>
          <section>
            <strong className="font-[Leferi-BlackOblique] mt-2 lg:mt-0 lg:ml-2 text-lg text-[#eeffff]">
              {props.type}
            </strong>
          </section>
        </section>
        <section className="p-2 border-[1px] border-solid border-black rounded-3xl mt-4 bg-black">
          <img
            src={props.mainImage}
            className="border-[1px] border-solid border-black rounded-2xl"
            alt="project img"
          />
        </section>
        <section className="w-full mt-12 lg:mt-16 flex flex-col items-center">
          <section className="flex items-center mb-4 self-start">
            <img
              src={Detail}
              className="w-5 sm:w-6 md:w-7 lg:w-8 mr-2"
              alt="project detail"
            />
            <h3 className="font-[Leferi-BlackOblique] md:text-base lg:text-lg text-[#eeffff] break-all">
              Detail
            </h3>
          </section>
          <section className="break-all p-3 font-[Apple-Medium] text-base sm:text-base md:text-lg lg:text-xl text-[#eeffff]">
            {props.detail}
          </section>
        </section>
        <button
          className={modalOpenButtonStyle}
          onClick={() => {
            setModalProps(props);
            setModalName(props.name);
          }}
        >
          {props.name}
          <span className="font-[Apple-Black]"> 프로젝트 더 알아보기</span>
        </button>
      </section>
    </li>
  );
};

export default Project;
