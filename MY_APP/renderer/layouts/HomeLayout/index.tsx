import React, { ReactNode } from "react";

import { default as S } from "./style";

type props = {
  children: ReactNode;
};

function HomeLayout({ children }: props): JSX.Element {
  return <S.CardGrid>{children}</S.CardGrid>;
}

export default HomeLayout;
