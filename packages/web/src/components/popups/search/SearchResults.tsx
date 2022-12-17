import styled from 'styled-components';
import { IReverse } from 'types';
import SearchResult from './SearchResult';

type Props = {
  results: IReverse[];
};

const Results = styled.div`
  overflow-y: scroll;
  flex-grow: 1;
  height: 50vh;
`;

export default function SearchResults({ results }: Props) {
  return (
    <Results>
      {results.map(result => (
        <SearchResult key={result.osm_id} result={result} />
      ))}
    </Results>
  );
}
