import { KeyboardEventHandler, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Search = styled.input`
  grid-row: 1;
  grid-column: 1;
  pointer-events: all;

  outline: none;
  border: none;
  background: ${props => props.theme.background};
  color: ${props => props.theme.foreground};

  font: inherit;
  font-weight: 500;
  font-size: 15px;
  padding: 16px 18px;
  box-shadow: var(--shadow-primary);
  border-radius: 8px;

  opacity: 0.8;
  transition: opacity 200ms;

  &:hover,
  &:focus {
    opacity: 1;
  }
`;

export default function SearchBar() {
  const [value, setValue] = useState('');
  const navigate = useNavigate();

  const submit = () => {
    navigate('/search?q=' + value);
  };

  const keyDown: KeyboardEventHandler<HTMLInputElement> = e => {
    if (e.key === 'Enter') {
      submit();
    }
  };

  return (
    <Search
      type="search"
      placeholder="Search for places..."
      value={value}
      onChange={e => setValue(e.target.value)}
      onKeyDown={keyDown}
    />
  );
}
