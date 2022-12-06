import styled from 'styled-components';
import MapButton from '../buttons/generic/MapButton';

import { FiUser } from 'react-icons/fi';

type Props = {
  onLoginPopup(): void;
};

const Buttons = styled.div`
  display: flex;
  justify-self: flex-end;
`;

export default function NavButtons({ onLoginPopup }: Props) {
  return (
    <Buttons>
      <MapButton icon={<FiUser />} onClick={onLoginPopup}>
        Log in
      </MapButton>
    </Buttons>
  );
}
