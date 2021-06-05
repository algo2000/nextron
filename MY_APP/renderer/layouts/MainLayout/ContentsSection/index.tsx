import { ReactNode } from "react";
import { default as S } from "./style";

type props = {
  children: ReactNode;
};

function ContentsSection({ children }: props) {
  return <S.ContentsSection>{children}</S.ContentsSection>;
}

export default ContentsSection;
