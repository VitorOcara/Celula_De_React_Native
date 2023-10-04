import { View } from "react-native";
import { Container } from "../styles";
import {
  ButtonLoginWithGoogle,
  Content,
  Input,
  InputViewText,
  Line,
  LineView,
  TextLegend,
  TextTitle,
} from "./styles";

export const Login = ({navigation}) => {
  return (
    <Container>
      <Content>
        <TextTitle>Log In To SHH</TextTitle>
        <ButtonLoginWithGoogle>
          <TextLegend>Login with google</TextLegend>
        </ButtonLoginWithGoogle>

        <LineView>
          <Line />
          <TextLegend style={{ color: "#000" }}>Or login with Email</TextLegend>
          <Line />
        </LineView>

        <View
          style={{
            width: "100%",
            alignItems: "center",
            marginTop: "10%",
            height: "30%",
            justifyContent: "center"
          }}
        >
          <InputViewText>
            <TextLegend style={{ color: "#000" }}>Username or Email</TextLegend>
          </InputViewText>
          <Input />

          <InputViewText>
            <TextLegend style={{ color: "#000" }}>Password</TextLegend>
          </InputViewText>
          <Input />
        </View>

        <View style={{ width: "80%", marginTop: "10%" }}>
          <TextLegend>Don't have an account?</TextLegend>
          <TextLegend style={{ color: "#000", marginLeft: "20%" }}>Sing up</TextLegend>
        </View>
      </Content>
    </Container>
  );
};

export default Login;
