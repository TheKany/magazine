import { Children } from "@/Types/types";
import BottomNav from "@/components/Nav/BottomNav";
import TopNav from "@/components/Nav/TopNav";
import Wrapper from "@/components/_common/Element/_Wrapper";

// 모두 공통으로 사용할 메인 padding: 16px 컴포넌트 만들어야함
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
