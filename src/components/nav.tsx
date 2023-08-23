import { IconCaretDownFilled } from "@tabler/icons-react";
import { useContext, useState } from "react";
import { ViewportContext } from "./viewport-context";
import { ServicesLinks } from "./desktop/services-link";

interface Props {
  isActive?: boolean;
}
export const Nav: React.FC<Props> = ({ isActive }) => {
  const [isHovered, setIsHovered] = useState(false);
  const { width } = useContext(ViewportContext);

  const handleHoverEnter = () => {
    setIsHovered(true);
  }

  const handleHoverExit = () => {
    setIsHovered(false);
  };

  const handleClickTablet = () => {
    setIsHovered(!isHovered);
  }
  

  return (
    <>
      <nav
        className={`fixed w-screen z-20 sm:z-0 sm:static sm:w-auto py-4 bg-[#efefef] gap-4 items-center flex flex-col sm:flex-row top-[64px] transition-all duration-200 ease-in ${
          isActive ? `translate-y-0` : `-translate-y-[11rem]`
        } md:flex-row md:static md:w-auto md:bg-transparent md:text-lg font-semibold`}
      >
        <a href="">Nosotros</a>
        <div className="flex items-center gap-1" onMouseLeave={handleHoverExit} onMouseEnter={handleHoverEnter}>
          Servicios
          {width >= 640 ? <IconCaretDownFilled className="h-5 w-5" onClick={handleClickTablet}/> : null}
          {width >= 640 && isHovered && <ServicesLinks handleHover={handleHoverExit}/> }
        </div>
        <a href="">Blog</a>
        <a href="">Contacto</a>
      </nav>
    </>
  );
};
