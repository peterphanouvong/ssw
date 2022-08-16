import { Block } from "baseui/block";
import { SSWNavbar } from "./SSWNavbar";

type Props = {
  children?: React.ReactNode;
};

export const SSWAppLayout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <SSWNavbar />
      <Block maxWidth={"1280px"} margin="auto" padding="32px">
        {children}
      </Block>
    </>
  );
};
