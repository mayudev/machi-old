import styled from 'styled-components';
import AppLogo from './AppLogo';
import NavButtons from './NavButtons';
import SearchBar from './SearchBar';

const Navigation = styled.nav`
  display: grid;
  margin: 1rem 1.5rem;
  grid-template-columns: 1fr 1fr 1fr;
`;

export default function Navbar() {
  return (
    <Navigation>
      <SearchBar />
      <AppLogo />
      <NavButtons />
    </Navigation>
  );
}
