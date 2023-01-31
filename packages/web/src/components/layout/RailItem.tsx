import { Link } from 'react-router-dom';
import styled from 'styled-components';

type Props = {
  icon: JSX.Element;
  label?: string;
  to?: string;
  onClick?(): void;
};

const Icon = styled.span`
  width: 48px;
  height: 24px;
  padding: 8px 0;
  text-align: center;

  border-radius: 100px;

  transition: 200ms;
`;

const Label = styled.div`
  opacity: 0.7;
  font-weight: 600;

  transition: 200ms;

  text-decoration: none;
`;

const LinkItem = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

const Item = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 1.25rem;

  color: inherit;
  cursor: pointer;

  &:hover > ${Label} {
    opacity: 1;
    color: ${props => props.theme.primary};
  }

  &:hover > ${Icon} {
    color: ${props => props.theme.primary};
    background: ${props => props.theme.railbg2};
  }
`;

export default function RailItem({ icon, label, to, onClick }: Props) {
  const Contents = () => (
    <Item onClick={onClick}>
      <Icon>{icon}</Icon>
      <Label>{label}</Label>
    </Item>
  );

  return to ? (
    <LinkItem to={to}>
      <Contents />
    </LinkItem>
  ) : (
    <Contents />
  );
}
