import styled from "styled-components";

type IconType = {
  width?: number;
  height?: number;
  fill?: string;
};

const Icon = styled.svg<IconType>`
  position: absolute;
  transform: translate(-50%, -50%);
  left: 50%;
  top: 50%;
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  fill: ${(props) => props.fill};
`;

export default Icon;
