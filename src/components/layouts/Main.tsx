import styled from "styled-components";
import { Theme } from "../../styles/Theme";
import { Breakpoints, Sizes } from "../../styles/Breakpoints";

const Main = styled.main`
  display: grid;
  grid-template-columns: 0.1fr 1fr 0.1fr;
  grid-template-areas:
    "nav nav nav"
    ". content .";
  justify-items: center;
  @media ${Breakpoints.sm} {
    display: block;
    grid-template-columns: 1fr;
    grid-template-areas:
      "nav"
      "content";
  }
  /* margin: 0 auto;
  max-width: ${Sizes.xxl};

  @media ${Breakpoints.xxl} {
    padding: 0 100px;
  }
  @media ${Breakpoints.xl} {
    padding: 0 80px;
  }
  @media ${Breakpoints.lg} {
    padding: 0 60px;
  }
  @media ${Breakpoints.md} {
    padding: 0 40px;
  }
  @media ${Breakpoints.sm} {
    padding: 0 20px;
  }
  @media ${Breakpoints.xs} {
    padding: 0 10px;
  } */
`;
export default Main;
