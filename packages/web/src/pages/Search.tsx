import { KeyboardEventHandler, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Center from '../components/common/Center';
import Hint from '../components/common/Hint';
import Spinner from '../components/common/Spinner';
import Sidebar from '../components/layout/Sidebar';
import SearchInput from '../components/popups/search/SearchInput';
import SearchResults from '../components/popups/search/SearchResults';
import { serviceNominatim } from '../store/modules/nominatim';

export default function Search() {
  const [search, setSearch] = useSearchParams();
  const [value, setValue] = useState('');

  const [trigger, result] = serviceNominatim.endpoints.search.useLazyQuery();

  // Form handling
  const submit = () => {
    setSearch(search => {
      search.set('q', value);
      return search;
    });
  };

  // Search params handling
  useEffect(() => {
    const query = search.get('q');
    if (query && query.length > 0) {
      trigger(query);
      setValue(query);
    }
  }, [search]);

  return (
    <Sidebar name="Search">
      <SearchInput
        value={value}
        onChange={val => setValue(val)}
        onSubmit={submit}
      />
      {result.isFetching ? (
        <Center>
          <Spinner />
        </Center>
      ) : result.isSuccess ? (
        result.data.length === 0 ? (
          <Center>
            <Hint>No results.</Hint>
          </Center>
        ) : (
          <SearchResults results={result.data} />
        )
      ) : result.isError ? (
        'error' // TODO error message
      ) : (
        <Center>
          <Hint>Start searching...</Hint>
        </Center>
      )}
    </Sidebar>
  );
}
