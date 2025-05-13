import { Children } from "@/Types/types";
import Navigation from "@/components/Navigation";
import Title from "@/components/Title";
import Wrapper from "@/components/_Wrapper";

const layout = ({ children }: Children) => {
  return (
    <>
      <Wrapper>
        <Title />
        {children}
      </Wrapper>

      <Navigation />
    </>
  );
};

export default layout;
