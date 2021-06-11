import styled from "styled-components";

import { Paper as paper, Toolbar } from "@material-ui/core";

const Paper = styled(paper)`
  height: 100%;
`;

const Header = styled(Toolbar)`
  column-gap: 15px;
`;

const style = {
  Paper,
  Header,
};

export default style;
