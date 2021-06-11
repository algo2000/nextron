import { AppBar, Toolbar, Typography } from "@material-ui/core";
import React, { ReactNode } from "react";
import styled from "styled-components";
import { default as S } from "./style";

type props = {
  children?: ReactNode;
  title?: string;
  headerIcon?: ReactNode;
};

function HomeDashPaper({ children, title, headerIcon }: props) {
  return (
    <S.Paper square elevation={3}>
      <AppBar position="static">
        <S.Header variant="dense">
          {headerIcon}
          <Typography variant="subtitle1" color="inherit">
            {title}
          </Typography>
        </S.Header>
      </AppBar>
      {children}
    </S.Paper>
  );
}

export default HomeDashPaper;
