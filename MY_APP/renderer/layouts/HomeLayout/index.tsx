import Grid from "@material-ui/core/Grid";
import React, { ReactNode } from "react";

type props = {
  children: ReactNode;
};

function HomeLayout({ children }: props): JSX.Element {
  console.log(children);
  return (
    <Grid container justify="center" spacing={10}>
      {children.map((element, index) => {
        <Grid key={index} item>
          {element}
        </Grid>;
      })}
      {children}
    </Grid>
  );
}

export default HomeLayout;
