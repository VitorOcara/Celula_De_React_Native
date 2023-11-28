import styled from "styled-components";
import BouncyCheckbox from "react-native-bouncy-checkbox";

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color:#4A63FF;
`;

export const VoidView = styled.View``;


export const CheckBox = styled(BouncyCheckbox)`
  margin: 5% 0;
`;
