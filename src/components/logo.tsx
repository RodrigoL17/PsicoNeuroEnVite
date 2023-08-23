interface Props {
  className: string;
}
export const Logo: React.FC<Props> = ({ className }) => {
  return <img className={className} src="logo.png" alt="logo psico" />;
};
