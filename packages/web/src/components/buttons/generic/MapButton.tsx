import { PropsWithChildren } from 'react';
import styled from 'styled-components';

type Props = {
  onClick?(): void;
  icon?: JSX.Element;
};

const Button = styled.button`
  background: ${props => props.theme.background};
  color: ${props => props.theme.foreground};
  font: inherit;

  outline: none;
  border: none;
  border-radius: 100px;
  padding: 4px 16px;
  box-shadow: var(--shadow);
  opacity: 0.8;
  transition: opacity 200ms ease;
  cursor: pointer;

  &:hover {
    opacity: 1;
  }
`;

const IconElement = styled.span`
  vertical-align: middle;
  margin-right: 8px;
`;

export default function MapButton({
  icon,
  children,
  onClick,
}: PropsWithChildren<Props>) {
  return (
    <Button onClick={onClick}>
      {icon && <IconElement>{icon}</IconElement>}
      {children}
    </Button>
  );
}
