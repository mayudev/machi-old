import styled from 'styled-components';

interface Props {
  [key: string]: any;
}

const StyledInput = styled.input`
  outline: none;
  border: none;
  padding: 16px 12px;
  background: inherit;
  color: inherit;
  font: inherit;
  font-weight: 500;

  display: block;
  width: 100%;
  box-sizing: border-box;

  border: 1px solid ${props => props.theme.border};
  border-radius: 6px;
`;

export default function Input(props: Props) {
  return <StyledInput {...props} />;
}
