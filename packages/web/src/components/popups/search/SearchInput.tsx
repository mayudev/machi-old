import { ChangeEvent, KeyboardEventHandler } from 'react';
import styled from 'styled-components';
import RawInput from '../../inputs/Input';
import FormButton from '../../inputs/generic/FormButton';
import { FiSearch } from 'react-icons/fi';

type Props = {
  value: string;
  onChange(query: string): void;
  onSubmit(): void;
};

const InputContainer = styled.div`
  margin: 12px;
  display: grid;
  grid-template-columns: 1fr 4rem;
  gap: 10px;
`;

const Input = styled(RawInput)`
  flex-grow: 2;
`;

export default function SearchInput({ value, onChange, onSubmit }: Props) {
  const keyDown: KeyboardEventHandler<HTMLInputElement> = e => {
    if (e.key === 'Enter') {
      onSubmit();
    }
  };

  return (
    <InputContainer>
      <Input
        value={value}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          onChange(e.target.value)
        }
        onKeyDown={keyDown}
        placeholder="Search..."
      />
      <FormButton
        onClick={onSubmit}
        icon={<FiSearch />}
        title="Search"
      ></FormButton>
    </InputContainer>
  );
}
