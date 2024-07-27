import { ProjectDataTypes } from "Types/ProjectType";
import Detail from "img/Projects/Detail.svg";
import { useModalState } from "store/Modal";

const ProjectList = (props: ProjectDataTypes): JSX.Element => {
  const { setModalName, setModalProps } = useModalState();

  const modalOpenButtonStyle =
    "mt-4 sm:mt-6 md:mt-8 text-[#eeffff] font-[Leferi-BlackOblique] xxs:text-[11px] xs:text-base sm:text-lg md:text-xl lg:text-2xl bg-[#262626] border-[1px] border-solid border-[#4c5050] rounded-2xl py-2 shadow-md hover:shadow-smallWhite hover:translate-y-[-5px] duration-300";

  return (
    <li className="mb-12 py-4 px-4 sm:py-4 sm:px-6 md:py-6 md:px-8 lg:py-8 lg:px-10 w-full bg-[#1a1a1a]">
      <section className="flex flex-col w-full">
        <section className="flex flex-col items-center sm:flex-row justify-between">
          <section className="flex flex-col items-center md:items-end sm:flex-row">
            <strong className="font-[Leferi-BlackOblique] text-base sm:text-2xl md:text-3xl lg:text-4xl text-[#eeffff]">
              "{props.name}"
            </strong>
            <strong className="mt-2 lg:mt-0 md:ml-4 font-[Leferi-BlackOblique] text-sm md:text-base text-[#eeffff]">
              {props.period}
            </strong>
          </section>
          <section className="mt-2 md:mt-0 md:self-end">
            <strong className="font-[Leferi-BlackOblique] lg:ml-2 text-sm sm:text-base md:text-lg text-[#eeffff]">
              {props.type}
            </strong>
          </section>
        </section>
        <section className="p-1 md:p-2 rounded-3xl mt-4 bg-black">
          <img
            src={props.mainImage}
            className="rounded-2xl"
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
          <section className="break-all font-[Apple-Medium] text-sm sm:text-base md:text-lg lg:text-xl text-[#eeffff]">
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
          "{props.name}"&nbsp;
          <span className="font-[Apple-Black]">프로젝트 더 알아보기</span>
        </button>
      </section>
    </li>
  );
};

export default ProjectList;
