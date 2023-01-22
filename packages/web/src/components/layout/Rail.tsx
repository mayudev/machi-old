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

  z-index: 4;

  padding-top: max(10px, 10vh);
`;

export default function Rail({ onAction }: Props) {
  return (
    <Container>
      <RailItem icon={<FiMenu size={32} />} />
      <RailItem icon={<FiSearch size={24} />} label="Search" />
      <RailItem icon={<FiMap size={24} />} label="Explore" />
      <RailItem
        icon={<FiLogIn size={24} />}
        label="Log in"
        onClick={() => onAction(RailAction.Login)}
      />
    </Container>
  );
}
