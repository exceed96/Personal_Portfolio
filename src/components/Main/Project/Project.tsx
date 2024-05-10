import ProjectList from "./ProjectList";
import project from "img/project.webp";
import PROJECT_DATA from "Data/Project/ProjectData";

const Project = (): JSX.Element => {
  return (
    <section id="project" className="mt-20">
      <section className="text-4xl font-[Leferi-BlackOblique] border-b-2 border-[#b1b1b1] w-full pb-4 flex items-center">
        <img
          src={project}
          className="w-8 sm:w-10 md:w-12 mr-4"
          alt="my projects"
        />
        <h2 className="text-[#eeffff] text-xl sm:text-4xl">Project</h2>
      </section>
      <ul className="mt-16">
        {PROJECT_DATA.map((projectData) => (
          <ProjectList
            name={projectData.name}
            mainImage={projectData.mainImage}
            composition={projectData.composition}
            part={projectData.part}
            key={projectData.key}
            type={projectData.type}
            period={projectData.period}
            detail={projectData.detail}
            stack={projectData.stack}
            tool={projectData.tool}
            majorFunction={projectData.majorFunction}
            myFunction={projectData.myFunction}
            result={projectData.result}
          />
        ))}
      </ul>
    </section>
  );
};

export default Project;
