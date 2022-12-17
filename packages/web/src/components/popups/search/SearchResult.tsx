import styled from 'styled-components';
import { IReverse } from 'types';

type Props = {
  result: IReverse;
};

const Result = styled.a`
  display: block;

  margin: 12px;
  padding: 12px 16px;

  background: ${props => props.theme.background2};
  border-radius: 8px;

  font-weight: 500;

  cursor: pointer;
  user-select: none;

  transition: color 100ms ease-out;

  &:hover {
    color: ${props => props.theme.primary};
  }
`;

export default function SearchResult({ result }: Props) {
  const showOnMap = () => {
    // TODO
  };

  return <Result>{result.display_name}</Result>;
}
