import styled from "styled-components";

export const Content = styled.View`
  flex: 1;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export const TextTitle = styled.Text`
  font-size: 30px;
  margin-bottom: 5%;
  font-weight: bold;
`;

export const TextLegend = styled.Text`
  font-size: 20px;
  margin-top: 5%;
`;

export const LoginInput = styled.TextInput`
  width: 100%;
  height: 50px;
  padding: 0 3%;
  background-color: aliceblue;
  border-radius: 15px;
`;

export const LoginButton = styled.Pressable`
  width: 30%;
  height: 50px;
  background-color: black;
  align-items: center;
  justify-content: center;
  margin-top: 5%;
  border-radius: 15px;
`;

export const TextButton = styled.Text`
  color: white;
  font-size: 15px;
  font-weight: bold;
`;

export const InputView = styled.View`
  width: 70%;
`;
