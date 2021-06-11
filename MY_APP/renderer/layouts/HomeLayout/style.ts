import styled from "styled-components";

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(1, 1fr);
  column-gap: 10px;
  height: 100%;
`;

const style = {
  CardGrid,
};

export default style;
