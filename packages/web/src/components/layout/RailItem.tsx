import styled from 'styled-components';

type Props = {
  icon: JSX.Element;
  label?: string;
  onClick?(): void;
};

const Icon = styled.span`
  width: 48px;
  padding: 2px 0;
  text-align: center;

  border-radius: 100px;

  transition: 200ms;
`;

const Label = styled.div`
  opacity: 0.7;
  font-weight: 500;

  transition: 200ms;
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
    background: ${props => props.theme.background2};
  }
`;

export default function RailItem({ icon, label, onClick }: Props) {
  return (
    <Item onClick={onClick}>
      <Icon>{icon}</Icon>
      <Label>{label}</Label>
    </Item>
  );
}
