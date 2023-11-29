import styled from "styled-components/native";
import { FlatList } from "react-native";

export const ConsultaList = styled(FlatList)`
  width: 90%;
  padding: 10% 0;
`;

export const ConsultaItem = styled.View`
  background-color: #f0f0f0;
  padding: 3%;
  margin-bottom: 12px;
  border-radius: 8px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const InfoText = styled.Text`
  font-size: 16px;
`;

export const ButtonIcon = styled.Pressable`
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  padding: 0 5%;
  border-radius: 15px;
`;
