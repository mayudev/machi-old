import { FiX } from 'react-icons/fi';
import { IoLogoGoogle } from 'react-icons/io5';
import styled from 'styled-components';
import FormButton from '../../components/inputs/generic/FormButton';
import Input from '../../components/inputs/Input';

type Props = {
  onClose(): void;
};

const Header = styled.div`
  display: flex;
  margin: 16px;
  align-items: center;
  justify-content: space-between;
  font-weight: 600;
`;

const HeaderSpan = styled.span`
  width: 16px;
`;

const HeaderButton = styled.button`
  all: unset;
  cursor: pointer;
  vertical-align: middle;
`;

const Body = styled.div`
  padding: 24px;
`;

const BodyText = styled.div`
  font-size: 24px;
  font-weight: 600;

  margin-bottom: 16px;
`;

const TextEm = styled.span`
  color: ${props => props.theme.primary};
`;

const ButtonContainer = styled.div`
  margin: 16px 0;
`;

const Center = styled.div`
  font-size: 18px;
  text-align: center;
  margin: 16px 0;
  font-weight: 600;
`;

export default function LoginPopup({ onClose }: Props) {
  return (
    <div>
      <Header>
        <HeaderSpan>
          <HeaderButton onClick={onClose}>
            <FiX />
          </HeaderButton>
        </HeaderSpan>
        <span>Log in or sign up</span>
        <HeaderSpan />
      </Header>
      <Body>
        <BodyText>
          Welcome to <TextEm>machi</TextEm>
        </BodyText>
        <Input placeholder="Email" type="email" />
        <ButtonContainer>
          <FormButton primary>Continue</FormButton>
        </ButtonContainer>
        <Center>or</Center>
        <FormButton icon={<IoLogoGoogle />}>Continue with Google</FormButton>
      </Body>
    </div>
  );
}
