import styled from 'styled-components';
import { Reverse } from 'types';
import CloseButton from '../../inputs/CloseButton';

type Props = {
  data: Reverse;
  onClose(): void;
};

const Container = styled.div`
  display: flex;
  align-items: center;

  flex-grow: 1;

  padding: 1rem;
`;

const Contents = styled.div`
  display: flex;
  flex-direction: column;

  padding: 0 1rem;
`;

const Title = styled.div`
  font-size: 22px;
  font-weight: 600;
`;

const Subtitle = styled.div`
  opacity: 0.8;
`;

export default function PlaceContents({ data, onClose }: Props) {
  return (
    <Container>
      <CloseButton onClose={onClose} />
      <Contents>
        <Title>{data.mostSpecificName || data.municipality}</Title>
        <div>{data.mostSpecificName && data.municipality}</div>
        <Subtitle>
          {data.place.address?.state && data.place.address?.state + ', '}{' '}
          {data.place.address?.country}
        </Subtitle>
      </Contents>
    </Container>
  );
}
