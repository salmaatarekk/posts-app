"use client";

import { useEffect, useState } from "react";
import { constants } from "../types/constants";

export function useWindowSize() {
  const [windowSize, setWindowSize] = useState<number>(0);

  useEffect(() => {
    const handleResize = () => {
      setWindowSize(window.innerWidth);
    };

    window.addEventListener(constants.window.resizeEventListener, handleResize);
    handleResize();

    return () =>
      window.removeEventListener(
        constants.window.resizeEventListener,
        handleResize
      );
  }, []);

  return windowSize;
}
