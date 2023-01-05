import { PropsWithChildren } from 'react';
import { useNavigate } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
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

const Appear = keyframes`
  from {
    transform: translateX(-100%);
  }

  to {
    transform: translateX(0)
  }
`;

const Window = styled.div`
  grid-column: 3;
  grid-row: 1 / 3;

  width: 25vw;

  pointer-events: all;

  background: white;

  display: flex;
  flex-direction: column;

  animation: ${Appear} 0.3s ease;
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
