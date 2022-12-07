import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  background: white;
  margin: 0 12px 12px;
  box-shadow: var(--shadow-primary);
  opacity: 0.8;
  border-radius: 8px;

  pointer-events: all;
`;
export default function Place() {
  const [search] = useSearchParams();

  useEffect(() => {}, [search]);

  return (
    <Container>
      <h3>Benidorm</h3>
      lat: {search.get('lat')}
      lng: {search.get('lng')}
    </Container>
  );
}
