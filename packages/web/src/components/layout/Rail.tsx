import { FiLogIn, FiMap, FiMenu, FiSearch } from 'react-icons/fi';
import styled from 'styled-components';
import RailItem from './RailItem';

export enum RailAction {
  Login,
}

type Props = {
  onAction(action: RailAction): void;
};

const Container = styled.nav`
  background: ${props => props.theme.railbg1};
  color: ${props => props.theme.railfg1};
  pointer-events: all;

  margin: 10px;
  border-radius: 8px;

  z-index: 4;

  padding-top: max(10px, 10vh);
`;

export default function Rail({ onAction }: Props) {
  const standardSize = 24;

  return (
    <Container>
      <RailItem icon={<FiMenu size={standardSize} />} />
      <RailItem
        icon={<FiSearch size={standardSize} />}
        label="Search"
        to="/search"
      />
      <RailItem icon={<FiMap size={standardSize} />} label="Explore" />
      <RailItem
        icon={<FiLogIn size={standardSize} />}
        label="Log in"
        onClick={() => onAction(RailAction.Login)}
      />
    </Container>
  );
}
