import { ToasterContainer } from "baseui/toast";
import { SSWNavbar } from "./SSWNavbar";

type Props = {
  children?: React.ReactNode;
};

export const SSWAppLayout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <ToasterContainer autoHideDuration={1000} />
      <SSWNavbar />
      {children}
    </>
  );
};
