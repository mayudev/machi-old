import styled from 'styled-components';

const Search = styled.input`
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
  return <Search type="search" placeholder="Search for places..." />;
}
