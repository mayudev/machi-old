import { IReverse } from 'types';
import SearchResult from './SearchResult';

type Props = {
  results: IReverse[];
};

export default function SearchResults({ results }: Props) {
  return (
    <>
      {results.map(result => (
        <SearchResult key={result.osm_id} result={result} />
      ))}
    </>
  );
}
