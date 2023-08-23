import { useContext, useState } from "react";
import { Logo } from "./logo";
import { ViewportContext } from "./viewport-context";
import { HamburgerMenuBtn } from "./mobile/hamburger-menu-btn";
import { Nav } from "./nav";

const Header = () => {
  const { width } = useContext(ViewportContext);
  const [clicked, setClicked] = useState(false);

  const handleClicked = () => {
    console.log(clicked);
    setClicked(!clicked);
  };

  return (
    <>
      <header className="flex fixed justify-around w-screen bg-[#efefef] items-center py-2 gap-[5rem] border-b-[1px] border-solid border-[#8a8a8a]/50 z-30">
        <a className="" href="#">
          <Logo className={width <= 640 
            ? "h-12 w-12" 
            : width <= 768 
            ? "h-16 w-16"
            : "h-20 w-20"} />
        </a>
        {width <= 640 ? (
          <HamburgerMenuBtn handleClicked={handleClicked} />
        ) : (
          <Nav isActive={true} />
        )}
      </header>
      {width <= 640 && <Nav isActive={clicked} />}
    </>
  );
};

export default Header;
