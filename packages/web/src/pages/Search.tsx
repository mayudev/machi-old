import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Spinner from '../components/common/Spinner';
import Sidebar from '../components/layout/Sidebar';
import SearchResults from '../components/popups/search/SearchResults';
import { serviceNominatim } from '../store/modules/nominatim';

export default function Search() {
  const [search, setSearch] = useSearchParams();

  const [trigger, result] = serviceNominatim.endpoints.search.useLazyQuery();

  useEffect(() => {
    const query = search.get('q');
    if (query) {
      trigger(query);
    }
  }, [search]);
  return (
    <Sidebar name="Search results">
      {result.isFetching ? (
        <Spinner />
      ) : result.isSuccess ? (
        <SearchResults results={result.data} />
      ) : (
        'error'
      )}
    </Sidebar>
  );
}
