import { ReactNode } from "react";
import styles from "../Main/GalaxyBackground.module.css";

const Container = ({ children }: { children: ReactNode }): JSX.Element => {
  return (
    <section
      className={`max-w-full w-full flex h-full flex-col items-center bg-[#212121]`}
    >
      {children}
    </section>
  );
};

export default Container;
