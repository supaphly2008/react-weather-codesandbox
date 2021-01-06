import { useState, useLayoutEffect } from "react";

const useViewport = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useLayoutEffect(() => {
    const onResize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", onResize);

    return () => window.removeEventListener("resize", onResize);
  }, []);

  return { width };
};

export default useViewport;
