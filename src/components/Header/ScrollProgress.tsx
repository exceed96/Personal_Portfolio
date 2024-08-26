import { useState, useCallback, useEffect, useRef } from "react";
import rocket from "img/rocket.svg";

const ScrollProgress = (): JSX.Element => {
  const [width, setWidth] = useState<number>(0);
  const progressRef = useRef<HTMLDivElement | null>(null);

  const handleScroll = useCallback((): void => {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;

    if (scrollTop === 0) {
      setWidth(0);
      return;
    }

    const windowHeight: number = scrollHeight - clientHeight;
    const currentPercent: number = scrollTop / windowHeight;
    setWidth(currentPercent * 100);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, true);

    return () => {
      window.removeEventListener("scroll", handleScroll, true);
    };
  }, [handleScroll]);

  return (
    <div className="w-full h-[4px] bg-black" ref={progressRef}>
      <div className="relative h-full bg-white" style={{ width: width + "%" }}>
        <img
          src={rocket}
          alt="progress rocket"
          className="xxs:w-12 xxs:h-12 xs:w-16 xs:h-16 sm:w-20 sm:h-20 absolute right-0 translate-x-1/2 top-1/2 -translate-y-1/2"
        />
      </div>
    </div>
  );
};

export default ScrollProgress;
