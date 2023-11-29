import styled from "styled-components";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { Ionicons } from "@expo/vector-icons";


export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #4a63ff;
`;

export const VoidView = styled.View``;

export const CheckBox = styled(BouncyCheckbox)`
  margin: 5% 0;
`;
export const TextBranco = styled.Text`
  font-size: 15px;
  color: white;
  margin-top: 5%;
  font-weight: bold;
`;
export const Icons = styled(Ionicons)`
  font-size: 30px;
`;