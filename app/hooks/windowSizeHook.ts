"use client";

import { useState, useEffect } from "react";


export function useWindowSize(){

    const [windowSize, setWindowSize] = useState<number>(0);
  


    useEffect(() => {

        const handleResize = () => {
            setWindowSize(window.innerWidth);
        }

        window.addEventListener("resize", handleResize);
        handleResize();

        return() => window.removeEventListener("resize", handleResize);


    }, []);

    return windowSize;

}