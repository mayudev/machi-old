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
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2), 0 -1px 0px rgba(0, 0, 0, 0.02);
  border-radius: 8px;
`;

export default function SearchBar() {
  return <Search type="search" />;
}
