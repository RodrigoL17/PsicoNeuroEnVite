import { createContext, useState, useEffect } from "react";

interface Props {
  children: React.ReactNode;
}

const ViewportContext = createContext({
  width: window.innerWidth,
  height: window.innerHeight,
});

const ViewportProvider = ({ children }: Props) => {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  const handleWindowResize = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <ViewportContext.Provider value={{ width, height }}>
      {children}
    </ViewportContext.Provider>
  );
};

export { ViewportProvider, ViewportContext };
