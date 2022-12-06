import { KeyboardEvent, PropsWithChildren, useEffect } from 'react';
import styled from 'styled-components';

type Props = {
  onHide(): void;
};

const Container = styled.div`
  z-index: 1001;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  background: rgba(0, 0, 0, 0.3);

  display: flex;
  align-items: center;
  justify-content: center;
`;

const Window = styled.div`
  background: ${props => props.theme.background};
  z-index: 1002;

  overflow: hidden;
  border-radius: 8px;

  width: min(560px, 100%);
`;

export default function Popup({ children, onHide }: PropsWithChildren<Props>) {
  const backdropClick = () => {
    onHide();
  };

  const handleKeydown = (ev: globalThis.KeyboardEvent) => {
    if (ev.key === 'Escape') {
      backdropClick();
    }
  };

  useEffect(() => {
    // listen for Esc to close the popup
    document.addEventListener('keydown', handleKeydown);

    return () => {
      document.removeEventListener('keydown', handleKeydown);
    };
  }, []);
  return (
    <Container onClick={backdropClick}>
      <Window className="contents" onClick={e => e.stopPropagation()}>
        {children}
      </Window>
    </Container>
  );
}
