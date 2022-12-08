import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  grid-row: 2;
  grid-column: 2;

  background: white;
  margin: 12px;
  box-shadow: var(--shadow);
  opacity: 0.8;
  border-radius: 8px;

  pointer-events: all;
`;
export default function Place() {
  const [search, setSearch] = useSearchParams();

  useEffect(() => {}, [search]);

  const close = () => {
    setSearch({});
  };

  return (
    <Container>
      <button onClick={close}>close</button>
      <h3>Benidorm</h3>
      lat: {search.get('lat')}
      lng: {search.get('lng')}
    </Container>
  );
}
