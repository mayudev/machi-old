import { KeyboardEventHandler, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
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
    if (query) {
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
        <Spinner />
      ) : result.isSuccess ? (
        <SearchResults results={result.data} />
      ) : (
        'error'
      )}
    </Sidebar>
  );
}
