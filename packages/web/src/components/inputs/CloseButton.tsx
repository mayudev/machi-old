import { FiX } from 'react-icons/fi';
import styled from 'styled-components';

type Props = {
  onClose(): void;
  size?: number;
};

const Button = styled.button`
  all: unset;
  cursor: pointer;
  vertical-align: middle;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function CloseButton({ onClose, size = 24 }: Props) {
  return (
    <Button onClick={onClose}>
      <FiX size={size} />
    </Button>
  );
}
