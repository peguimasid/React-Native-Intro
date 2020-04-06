import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  padding: 30px;
`;

export const Form = styled.View`
  flex-direction: row;
  padding-bottom: 20px;
  border-bottom-width: 1px;
  border-color: #4f4f4f;
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: '#999',
})`
  flex: 1;
  height: 40px;
  background: #d3d3d3;
  height: 45px;
  border-radius: 10px;
  padding: 0 15px;
  border: 1px solid #d3d3d3;
`;

export const SubmitButton = styled(RectButton)`
  justify-content: center;
  align-items: center;
  background: #4f4f4f;
  padding: 0 14px;
  border-radius: 10px;
  margin-left: 10px;
`;
