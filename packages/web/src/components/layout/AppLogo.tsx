import { Link } from 'react-router-dom';
import styled from 'styled-components';

const LogoLink = styled(Link)`
  color: inherit;
`;

export default function AppLogo() {
  return <LogoLink to="/">machi</LogoLink>;
}
