import { PropsWithChildren } from 'react';
import styled from 'styled-components';

type Props = {
  onClick?(): void;
  primary?: boolean;
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

  &:hover {
    opacity: 1;
  }

  background: ${props => (props.primary ? props.theme.primary : '')};
`;

export default function FormButton({
  children,
  primary,
  onClick,
}: PropsWithChildren<Props>) {
  return (
    <Button primary={primary} onClick={onClick}>
      {children}
    </Button>
  );
}
