import styled from "styled-components";
import { Theme } from "../../styles/Theme";
import { Breakpoints } from "../../styles/Breakpoints";
interface Props {}
const Nav = styled.nav<Props>`
  grid-area: nav;
  width: 100%;
  min-height: 50px;
  background-color: #fff;
`;
export default Nav;
