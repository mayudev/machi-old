import { PropsWithChildren } from 'react';
import { Link as LinkComponent } from 'react-router-dom';
import styled from 'styled-components';

const Contents = styled.div`
  color: ${props => props.theme.railfg2};
  font-weight: 500;
  font-size: 15px;
  text-align: center;

  margin: 0.25rem 0;

  cursor: pointer;

  transition: color 200ms;

  &:hover {
    color: ${props => props.theme.primary};
  }
`;

const Link = styled(LinkComponent)`
  color: inherit;
  text-decoration: inherit;
`;

type Props = {
  to?: string;
  onClick?(): void;
  title?: string;
};

export default function RailLink({
  to,
  onClick,
  children,
  title,
}: PropsWithChildren<Props>) {
  return (
    <Contents onClick={onClick}>
      {to ? (
        <Link to={to} title={title}>
          {children}
        </Link>
      ) : (
        <a title={title}>{children}</a>
      )}
    </Contents>
  );
}
