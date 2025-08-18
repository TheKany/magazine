import { Children } from "@/Types/types";
import Container from "@/components/_common/Element/_Container";
import PaddingBox from "@/components/_common/Element/_PaddingBox";

const layout = ({ children }: Children) => {
  return (
    <Container>
      <PaddingBox tp={4} rp={4} bp={4} lp={4}>
        {children}
      </PaddingBox>
    </Container>
  );
};

export default layout;
