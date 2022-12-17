import { useMap } from 'react-leaflet';
import { IReverse } from 'types';

type Props = {
  result: IReverse;
};

export default function SearchResult({ result }: Props) {
  const showOnMap = () => {
    // TODO
  };

  return <h1>{result.display_name}</h1>;
}
