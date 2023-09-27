import styled from "styled-components";

export const Content = styled.View`
  width: 100%;
  height: 100%;
  justify-content: space-between;
  align-items: center;
`;

export const TopView = styled.View`
  height: 25%;
  width: 100%;
`;
export const MidView = styled.View`
  justify-content: space-between;
  flex-direction: row;
  height: 40%;
  width: 100%;
`;

export const MidViewLeftCloud = styled.View`
  height: 100%;
  width: 50%;
`;
export const LeftCloudTop = styled.View`
  width: 50%;
  height: 39%;
  border-radius: 100px;
  margin:0 -25% -25% -25%;
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
  margin:0 -25% -25% -25%;
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
`;
