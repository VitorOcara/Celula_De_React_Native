import { Text } from "react-native";
import { Container } from "../styles";
import {
  BottonView,
  Content,
  Content2,
  LeftCloudBot,
  LeftCloudTop,
  MidView,
  MidViewLeftCloud,
  MidViewRightCloud,
  RigthCloudBot,
  RigthCloudTop,
  TopView,
} from "./styles";

const Login = () => {
  return (
    <Container>
      <Content>
        <TopView></TopView>

        <MidView>
          <MidViewLeftCloud>
            <LeftCloudTop />
            <LeftCloudBot />
          </MidViewLeftCloud>
          <MidViewRightCloud>
            <RigthCloudTop />
            <RigthCloudBot />
          </MidViewRightCloud>
        </MidView>

        <BottonView></BottonView>
      </Content>
    </Container>
  );
};

export default Login;
