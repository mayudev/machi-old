import { PropsWithChildren, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled, { keyframes, css } from 'styled-components';
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
    opacity: 0.5;
  }

  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

const Disappear = keyframes`
  from {
    transform: translateX(0);
    opacity: 1;
  }

  to {
    transform: translateX(-100%);
    opacity: 0.5;
  }
`;

const Window = styled.div<{
  exiting: boolean;
}>`
  min-width: 450px;
  max-width: 450px;

  margin: 10px;
  border-radius: 8px;
  box-shadow: var(--shadow-primary);

  pointer-events: all;

  background: white;

  display: flex;
  flex-direction: column;
  overflow: hidden;

  animation: ${props =>
    props.exiting
      ? css`
          ${Disappear} 0.3s var(--ease-out);
        `
      : css`
          ${Appear} 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        `};
`;

export default function Sidebar({ children, name }: PropsWithChildren<Props>) {
  const navigate = useNavigate();
  const [exiting, setExiting] = useState(false);

  const hide = () => {
    setExiting(true);
    setTimeout(() => {
      navigate('/');
    }, 300);
  };

  const handleKeydown = (ev: globalThis.KeyboardEvent) => {
    if (ev.key === 'Escape') {
      hide();
    }
  };

  useEffect(() => {
    // listen for Esc to close the sidebar
    document.addEventListener('keydown', handleKeydown);

    return () => {
      document.removeEventListener('keydown', handleKeydown);
    };
  }, []);

  return (
    <Window exiting={exiting}>
      <Header>
        <span>{name}</span>
        <CloseButton onClose={hide} />
      </Header>
      {children}
    </Window>
  );
}
