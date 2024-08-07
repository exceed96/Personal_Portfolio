import ScrollProgress from "./ScrollProgress";

const Header = (): JSX.Element => {
  const navListStyle =
    "px-4 text-[#eeffff] text-center xxs:text-[10px] xs:text-[12px] sm:text-base md:text-base lg:text-lg xl:text-xl 2xl:text-2xl font-[Leferi-BlackOblique] cursor-pointer transition-transform duration-300 transform w-screen hover:scale-110";

  const scrollToSection = (sectionId: string) => {
    const yOffset = -100;
    const targetElement = document.getElementById(sectionId);
    if (targetElement) {
      const y =
        targetElement.getBoundingClientRect().top +
        window.pageYOffset +
        yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <header className="bg-[#1a1a1a] w-full fixed top-0 z-10">
      <nav className="py-8">
        <ul className="flex justify-center">
          <li
            className={navListStyle}
            onClick={() => scrollToSection("aboutMe")}
          >
            AboutMe
          </li>
          <li
            className={navListStyle}
            onClick={() => scrollToSection("education")}
          >
            Education
          </li>
          <li
            className={navListStyle}
            onClick={() => scrollToSection("skills")}
          >
            Skills
          </li>
          <li
            className={navListStyle}
            onClick={() => scrollToSection("project")}
          >
            Project
          </li>
        </ul>
      </nav>
      <ScrollProgress />
    </header>
  );
};

export default Header;
