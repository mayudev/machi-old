import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
`;

const LogoLink = styled(Link)`
  color: inherit;
  text-decoration: none;
  font-size: 2rem;
  font-weight: 600;
`;

export default function AppLogo() {
  return (
    <Container>
      <LogoLink to="/">machi</LogoLink>
    </Container>
  );
}
