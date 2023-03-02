import styled from 'styled-components';
import { IReverse } from 'types';
import {
  getCityOrEquivalent,
  getCountry,
  getImmediatePlaceName,
} from '../../../lib/reverseHelpers';
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

const Secondary = styled.span`
  color: ${props => props.theme.foreground2};
`;

export default function SearchResult({ result }: Props) {
  const dispatch = useAppDispatch();

  const showOnMap = () => {
    dispatch(
      moveTo({
        lat: Number(result.lat),
        lng: Number(result.lon),
        zoom: 17,
      })
    );
  };

  const immediate = getImmediatePlaceName(result.address!);
  const city = getCityOrEquivalent(result.address!);

  return (
    <Result role="link" onClick={showOnMap} title={result.display_name}>
      {immediate}
      {', '}
      <Secondary>
        {city !== immediate && city && `${city}, `}

        {getCountry(result.address!)}
      </Secondary>
    </Result>
  );
}
