import birth from "img/birth.svg";
import phone from "img/phone.svg";
import velog from "img/velog.svg";
import github from "img/github.svg";
import email from "img/email.svg";

const ContactAndInfo = (): JSX.Element => {
  const ListStyle =
    "flex items-center text-2xl text-[#D4D4D4] font-[Apple-Bold] mt-8";
  const infoStyle = "text-base sm:text-lg md:text-2xl";

  return (
    <ul className="flex flex-col self-start text-3xl h-full w-full sm:ml-12 font-[Leferi-BlackOblique]">
      <section className="w-full border-b-2 border-gray-400 pb-4 mt-4 md:mt-0">
        <strong className="text-[#eeffff] text-xl sm:text-4xl">
          Contact & Info
        </strong>
      </section>
      <li className={ListStyle}>
        <img src={birth} className="mr-4 w-6" alt="birth" />
        <span className={infoStyle}>1996.04.24</span>
      </li>
      <li className={ListStyle}>
        <img src={phone} className="mr-4 w-6" alt="phone number" />
        <span className={infoStyle}>010-5388-9359</span>
      </li>
      <li className={ListStyle}>
        <img src={velog} className="mr-4 w-6" alt="blog" />
        <a
          href="https://velog.io/@exceed96"
          className={`${infoStyle} hover:scale-110 hover:text-[#eeffff] duration-300`}
          target="blank"
          title="기술 블로그"
        >
          https://velog.io/@exceed96
        </a>
      </li>
      <li className={ListStyle}>
        <img src={github} className="mr-4 w-6" alt="github" />
        <a
          href="https://github.com/exceed96"
          className={`${infoStyle} hover:scale-110 hover:text-[#eeffff] duration-300`}
          target="blank"
          title="깃허브"
        >
          https://github.com/exceed96
        </a>
      </li>
      <li className={ListStyle}>
        <img src={email} className="mr-4 w-6" alt="email" />
        <span className={infoStyle}>exceed_96@naver.com</span>
      </li>
    </ul>
  );
};

export default ContactAndInfo;
