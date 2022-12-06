import styled from 'styled-components';
import AppLogo from './AppLogo';
import NavButtons from './NavButtons';
import SearchBar from './SearchBar';

type Props = {
  onLoginPopup(): void;
};

const Navigation = styled.nav`
  display: grid;
  margin: 1rem 1.5rem;
  grid-template-columns: 1fr 1fr 1fr;
`;

export default function Navbar({ onLoginPopup }: Props) {
  return (
    <Navigation>
      <AppLogo />
      <SearchBar />
      <NavButtons onLoginPopup={onLoginPopup} />
    </Navigation>
  );
}
