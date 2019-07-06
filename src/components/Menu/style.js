import { Animated } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled(Animated.ScrollView)`
  margin: 0 30px;
`;

export const Code = styled.View`
    background: #fff;
    padding: 10px; 
    align-self: center;
`;
export const Nav = styled.View`
  margin-top: 30px;
  border-top-width: 1px; 
  border-top-color: rgba(255, 255, 255, 0.8);
`;

export const NavItem = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 12px 0;
  border-bottom-width: 1px;
  border-bottom-color: rgba(255, 255, 255, 0.8);
`;

export const NavText = styled.Text`
  font-size: 15px;
  color: #fff;
  margin-left: 20px;
`;

export const SingOutButton = styled.TouchableOpacity`
  border-width: 1px;
  border-radius: 4px;
  border-color: rgba(255, 255, 255, 0.8);
  justify-content: center;
  align-items: center;
  padding: 12px;
  margin-top: 15px;
`;


export const SingOutButtonText = styled.text`
  color: #fff;
  font-weight: bold;
  font-size: 13px;
`;

