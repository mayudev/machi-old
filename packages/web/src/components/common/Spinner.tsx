import styled, { keyframes } from 'styled-components';

const Animation = keyframes`
  0% {
    top: 36px;
    left: 36px;
    width: 0;
    height: 0;
    opacity: 0;
  }
  4.9% {
    top: 36px;
    left: 36px;
    width: 0;
    height: 0;
    opacity: 0;
  }
  5% {
    top: 32px;
    left: 32px;
    width: 0;
    height: 0;
    opacity: 1;
  }
  100% {
    top: 0px;
    left: 0px;
    width: 56px;
    height: 56px;
    opacity: 0;
  }
`;

const Ripple = styled.div`
  display: inline-block;
  position: relative;
  width: 64px;
  height: 64px;
`;

const InnerFirst = styled.div`
  position: absolute;
  border: 4px solid ${props => props.theme.primary};
  opacity: 1;
  border-radius: 50%;
  animation: ${Animation} 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
`;

const InnerSecond = styled.div`
  animation-delay: -0.5s;
`;

export default function Spinner() {
  return (
    <Ripple>
      <InnerFirst />
      <InnerSecond />
    </Ripple>
  );
}
