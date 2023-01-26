import { PropsWithChildren } from 'react';
import styled from 'styled-components';

const HintText = styled.span`
  color: ${props => props.theme.border};
`;

export default function Hint({ children }: PropsWithChildren<{}>) {
  return <HintText>{children}</HintText>;
}
