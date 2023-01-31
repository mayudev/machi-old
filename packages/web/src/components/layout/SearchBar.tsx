import { KeyboardEventHandler, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Search = styled.input`
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

  @media (min-width: 768px) {
    width: 400px;
  }
`;

export default function SearchBar() {
  const [value, setValue] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  const submit = () => {
    navigate('/search?q=' + value);
  };

  const keyDown: KeyboardEventHandler<HTMLInputElement> = e => {
    if (e.key === 'Enter') {
      submit();
    }
  };

  if (location.pathname === '/search') return <div></div>;

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
