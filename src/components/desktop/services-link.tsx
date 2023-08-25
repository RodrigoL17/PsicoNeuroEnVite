interface Props {
  handleHover: () => void;
}

export const ServicesLinks: React.FC<Props> = ({ handleHover }) => {
  return (
    <ul
      className="absolute top-10 left-14 flex items-center flex-col justify-center py-2 px-4 bg-[#efefef] transition-all duration-300 ease-in [&>li]:p-1 hover:[&>li]:bg-red-500"
      onMouseLeave={handleHover}
    >
      <li>Depresion</li>
      <li>Reiki</li>
      <li>Psicoterapia</li>
    </ul>
  );
};
