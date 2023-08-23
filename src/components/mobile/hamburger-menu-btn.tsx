import { IconMenu2 } from "@tabler/icons-react";

interface Props {
  handleClicked: () => void;
}
export const HamburgerMenuBtn: React.FC<Props> = ({ handleClicked }) => {
  return (
    <button className="z-50" onClick={() => handleClicked()}>
      <IconMenu2 />
    </button>
  );
};
