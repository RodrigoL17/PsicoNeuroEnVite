import { useContext, useState } from "react";
import { Link} from "react-router-dom"

import { ViewportContext } from "../contexts/viewport-context";

import { Logo } from "./logo";
import { Nav } from "./nav";
import { HamburgerMenuBtn } from "./mobile/hamburger-menu-btn";

const Header = () => {
  const { width } = useContext(ViewportContext);
  const [clicked, setClicked] = useState(false);

  const handleClicked = () => {
    setClicked(!clicked);
  };

  return (
    <>
      <header className="flex fixed justify-around w-screen bg-[#efefef] items-center py-2 gap-[5rem] border-b-[1px] border-solid border-[#8a8a8a]/50 z-30">
        <Link to="/">
          <Logo className={width <= 640 
            ? "h-12 w-12" 
            : width <= 768 
            ? "h-16 w-16"
            : "h-20 w-20"} />
        </Link>
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
