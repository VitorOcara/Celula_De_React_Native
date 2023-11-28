import styled from "styled-components";
import { Ionicons } from "@expo/vector-icons";

export const FooterContainer = styled.View`
  height: 15%;
  width: 100%;
  align-items: center;
  justify-content: center;
  background-color: white;
  border-radius: 15px;
  padding-bottom: 15px;
  margin-bottom: -15px;
`;
export const FooterContent = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
`;

export const FooterDivisor = styled.View`
  height: 90%;
  width: 1%;
  background-color: black;
`;

export const FooterIcons = styled(Ionicons)`
  font-size: 30px;
`;

export const FooterText = styled.Text`
  font-size: 15px;
  text-align: center;
`;

export const FooterPresseable = styled.Pressable`
  justify-content: center;
  align-items: center;
  width: 30%;

`;
