import { FiLogIn, FiMap, FiMenu, FiSearch, FiSun } from 'react-icons/fi';
import styled from 'styled-components';
import FlexFiller from '../common/FlexFiller';
import RailItem from './RailItem';
import RailLink from './RailLink';
import RailThemeSwitcher from './RailThemeSwitcher';

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

  display: flex;
  flex-direction: column;

  margin: 10px;
  border-radius: 8px;

  z-index: 4;

  padding: max(10px, 10vh) 0;
`;

const Heading = styled.h2`
  text-align: center;
  font-size: 21px;
`;

export default function Rail({ onAction }: Props) {
  const standardSize = 24;

  return (
    <Container>
      <Heading>machi{/* TODO PUT LOGO HERE */}</Heading>
      <RailItem
        icon={<FiSearch size={standardSize} />}
        label="Search"
        to="/search"
      />
      <RailItem
        icon={<FiMap size={standardSize} />}
        label="Explore"
        to="/explore"
      />

      <FlexFiller />
      <RailItem
        icon={<FiLogIn size={standardSize} />}
        label="Log in"
        onClick={() => onAction(RailAction.Login)}
      />
      <RailThemeSwitcher />
      <RailLink to="/about">About</RailLink>
    </Container>
  );
}
