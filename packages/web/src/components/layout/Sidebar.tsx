import { PropsWithChildren } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import CloseButton from '../inputs/CloseButton';

type Props = {
  name: string;
};

const Header = styled.div`
  display: flex;
  padding: 16px;
  align-items: center;
  justify-content: space-between;
  font-weight: 600;
`;

const Window = styled.div`
  grid-column: 3;
  grid-row: 1 / 3;

  margin: 0 12px 12px;
  box-shadow: var(--shadow);
  border-radius: 8px;

  pointer-events: all;

  background: white;

  display: flex;
  flex-direction: column;
`;

export default function Sidebar({ children, name }: PropsWithChildren<Props>) {
  const navigate = useNavigate();

  const navigateBack = () => {
    navigate('/');
  };

  return (
    <Window>
      <Header>
        <span>{name}</span>
        <CloseButton onClose={navigateBack} />
      </Header>
      {children}
    </Window>
  );
}
