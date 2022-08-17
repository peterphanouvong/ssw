import { SSWNavbar } from "./SSWNavbar";

type Props = {
  children?: React.ReactNode;
};

export const SSWAppLayout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <SSWNavbar />
      {children}
    </>
  );
};
