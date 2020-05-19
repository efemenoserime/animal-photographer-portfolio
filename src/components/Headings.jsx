import styled from "styled-components";

export const SectionHeading = styled.h2`
  position: relative;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: -25px;
    height: 100%;
    width: 10px;

    background-color: #3d314a;
  }

  &::before {
    content: "";
    position: absolute;
    top: 10px;
    left: -28px;
    height: 100%;
    width: 6px;

    z-index: 1;
    background-color: #645986;
  }
`;
