import React, { useState, useCallback, useEffect, useRef } from "react";

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
      <div className="h-full bg-white" style={{ width: width + "%" }}></div>
    </div>
  );
};

export default ScrollProgress;
