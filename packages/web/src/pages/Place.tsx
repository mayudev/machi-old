import { cloneElement, useEffect } from 'react';
import { FiX } from 'react-icons/fi';
import { useSearchParams } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styled from 'styled-components';
import { serviceNominatim } from '../store/modules/nominatim';

const Container = styled.div`
  grid-row: 2;
  grid-column: 2;

  background: white;
  margin: 12px;
  box-shadow: var(--shadow);
  border-radius: 8px;

  pointer-events: all;
`;

const HeaderButton = styled.button`
  all: unset;
  cursor: pointer;
  vertical-align: middle;
`;

export default function Place() {
  const [search, setSearch] = useSearchParams();

  const [trigger, result] = serviceNominatim.endpoints.reverse.useLazyQuery();
  useEffect(() => {
    const lat = search.get('lat');
    const lng = search.get('lng');
    if (lat && lng) {
      trigger([lat, lng]);
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
        <HeaderButton onClick={close}>
          <FiX />
        </HeaderButton>
        <h3>{result.data?.address.city || 'unknown'}</h3>
        lat: {result.isLoading}
      </Container>
    </CSSTransition>
  );
}
