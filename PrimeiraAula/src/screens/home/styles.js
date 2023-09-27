import styled from "styled-components";

export const Content = styled.View`
  padding: 6% 0;
  width: 100%;
  height: 100%;
  justify-content: space-between;
  align-items: center;
`;

export const TopView = styled.View`
  height: 25%;
  width: 90%;
`;
export const MidView = styled.View`
  justify-content: space-between;
  flex-direction: row;
  height: 40%;
  width: 100%;
  margin: 5% 0;
`;

export const MidViewLeftCloud = styled.View`
  height: 100%;
  width: 50%;
`;
export const LeftCloudTop = styled.View`
  width: 50%;
  height: 39%;
  border-radius: 100px;
  margin: 0 -25% -25% -25%;
  background-color: white;
`;
export const LeftCloudBot = styled.View`
  width: 100%;
  height: 40%;
  margin-left: -25%;
  background-color: white;
  border-radius: 100px;
`;

export const RigthCloudTop = styled.View`
  width: 50%;
  height: 39%;
  border-radius: 100px;
  margin: 0 -25% -25% -25%;
  background-color: white;
`;
export const RigthCloudBot = styled.View`
  width: 100%;
  height: 40%;
  margin-right: -25%;
  background-color: white;
  border-radius: 100px;
`;

export const MidViewRightCloud = styled.View`
  justify-content: flex-end;
  align-items: flex-end;
  height: 100%;
  width: 50%;
`;

export const BottonView = styled.View`
  width: 100%;
  height: 35%;
  align-items: center;
`;

export const Title = styled.Text`
  color: white;
  font-size: 50px;
  font-weight: bold;
  width: 90%;
`;

export const SubTitle = styled.Text`
  color: black;
  font-size: 25px;
  width: 90%;
  font-weight: bold;
`;

export const SingInButton = styled.Pressable`
  background-color: black;
  height: 20%;
  width: 60%;
  align-items: center;
  justify-content: center;
  border-radius: 25px;
`;
export const ButtonText = styled.Text`
  color: white;
  font-size: 20px;
  font-weight: bold;
`;

export const LegendText = styled.Text`
  margin-top: 2%;
  color: white;
  font-size: 15px;
  font-weight: bold;
`;
