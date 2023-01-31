import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import styled from 'styled-components';
import Spinner from '../components/common/Spinner';
import PlaceContents from '../components/popups/place/PlaceContents';
import { serviceNominatim } from '../store/modules/nominatim';

const Container = styled.div`
  background: white;
  box-shadow: var(--shadow);
  border-radius: 8px;

  pointer-events: all;

  display: flex;
  flex-direction: column;

  &:not(.place-exit):hover {
    opacity: 1;
  }

  @media (min-width: 768px) {
    width: 300px;
    align-self: center;
    padding: 0.5rem 1rem;
  }
`;

const Center = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  flex-grow: 1;
`;

export default function Place() {
  const [search, setSearch] = useSearchParams();

  const [trigger, result] = serviceNominatim.endpoints.reverse.useLazyQuery();
  useEffect(() => {
    const lat = search.get('lat');
    const lng = search.get('lng');
    const zoom = search.get('zoom');
    if (lat && lng && zoom) {
      trigger([lat, lng, zoom]);
    }
  }, [search]);

  const close = () => {
    setSearch({});
  };

  return (
    <CSSTransition
      in={search.has('lat')}
      timeout={200}
      unmountOnExit={true}
      classNames="place"
    >
      <Container>
        {result.isFetching ? (
          <Center>
            <Spinner />
          </Center>
        ) : result.isSuccess ? (
          <PlaceContents onClose={close} data={result.data} />
        ) : (
          'error'
        )}
      </Container>
    </CSSTransition>
  );
}
