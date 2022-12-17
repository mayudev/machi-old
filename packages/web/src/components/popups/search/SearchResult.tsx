import styled from 'styled-components';
import { IReverse } from 'types';
import { moveTo } from '../../../store/slices/map';
import { useAppDispatch } from '../../../store/store';

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
  const dispatch = useAppDispatch();

  const showOnMap = () => {
    dispatch(
      moveTo({
        lat: result.lat,
        lng: result.lon,
        zoom: 17,
      })
    );
    /* dispatch(
      moveTo({
        lat: '1',
        lng: '12',
        zoom: 1,
      })
    ); */
  };

  return <Result onClick={showOnMap}>{result.display_name}</Result>;
}
