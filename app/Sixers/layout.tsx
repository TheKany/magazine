import { Children } from "@/Types/types";
import BottomNav from "@/components/Nav/BottomNav";
import TopNav from "@/components/Nav/TopNav";
import Wrapper from "@/components/_common/Element/_Wrapper";

const layout = ({ children }: Children) => {
  return (
    <>
      <Wrapper>
        <TopNav />
        {children}
      </Wrapper>

      <BottomNav />
    </>
  );
};

export default layout;
