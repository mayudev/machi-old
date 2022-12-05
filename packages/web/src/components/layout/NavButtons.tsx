import styled from 'styled-components';
import MapButton from '../buttons/generic/MapButton';

import { FiUser } from 'react-icons/fi';

const Buttons = styled.div`
  display: flex;
  justify-self: flex-end;
`;

export default function NavButtons() {
  return (
    <Buttons>
      <MapButton icon={<FiUser />}>Log in</MapButton>
    </Buttons>
  );
}
