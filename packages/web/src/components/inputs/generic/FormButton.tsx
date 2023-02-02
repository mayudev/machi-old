import { PropsWithChildren } from 'react';
import styled from 'styled-components';

type Props = {
  onClick?(): void;
  primary?: boolean;
  icon?: JSX.Element;
  title?: string;
};

const Button = styled.button<{
  primary?: boolean;
}>`
  font: inherit;

  outline: none;
  border: none;
  border-radius: 6px;
  padding: 14px 22px;
  transition: opacity 200ms ease;
  cursor: pointer;
  display: block;
  width: 100%;
  font-weight: 600;
  background: ${props =>
    props.primary ? props.theme.primary : props.theme.background};
  border: ${props => (props.primary ? '' : `1px solid ${props.theme.border}`)};
  color: ${props => (props.primary ? '' : props.theme.foreground)};

  transition: background 200ms ease;

  &:hover {
    opacity: 1;
    background: ${props =>
      props.primary ? props.theme.primary2 : props.theme.background2};
  }
`;

const IconElement = styled.span`
  vertical-align: middle;
  margin-right: 8px;
`;

export default function FormButton({
  children,
  icon,
  primary,
  title,
  onClick,
}: PropsWithChildren<Props>) {
  return (
    <Button primary={primary} onClick={onClick} title={title}>
      {icon && <IconElement>{icon}</IconElement>}
      {children}
    </Button>
  );
}
