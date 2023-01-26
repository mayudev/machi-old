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

  background: ${props => props.theme.railbg1};
  color: ${props => props.theme.railfg1};

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
  min-width: 400px;
  max-width: 400px;

  margin: 10px;
  border-radius: 8px;
  box-shadow: var(--shadow-primary);

  pointer-events: all;

  background: white;

  display: flex;
  flex-direction: column;
  overflow: hidden;

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
