import styled from "styled-components";
import { AntDesign } from "@expo/vector-icons";

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: black;
`;
export const ContainerModal = styled.View`
  justify-content: center;
  align-items: center;
  background-color: white;
  flex: 1;
`;

export const TextTitle = styled.Text`
  margin: 1% 0;
  color: white;
  font-size: 30px;
`;

export const StyledSectionList = styled.SectionList`
  width: 95%;
`;

export const ItemView = styled.View`
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin-top: 5%;
`;

export const ItemText = styled.Text`
  color: white;
  font-size: 20px;
`;

export const IconView = styled(AntDesign)`
  color: white;
  font-size: 40px;
  background-color: #001282;
  border-radius: 20px;
  margin-right: 20%;
`;

export const IconPressable = styled.Pressable`
    flex-direction: row;
    align-items: center;
`;

export const TitleModal = styled.Text``;