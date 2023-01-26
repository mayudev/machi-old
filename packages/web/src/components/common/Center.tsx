import { PropsWithChildren } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

export default function Center({ children }: PropsWithChildren<{}>) {
  return <Container>{children}</Container>;
}
