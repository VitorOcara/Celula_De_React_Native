import { View } from "react-native";
import { Container } from "../styles";
import {
  ButtonLoginWithGoogle,
  Content,
  Input,
  Line,
  LineView,
  TextLegend,
  TextTitle,
} from "./styles";

const Cadastro = () => {
  return (
    <Container>
      <Content>
        <TextTitle>Sing up To SHH</TextTitle>
        <ButtonLoginWithGoogle>
          <TextLegend>Sing in with google</TextLegend>
        </ButtonLoginWithGoogle>

        <LineView>
          <Line />
          <TextLegend style={{ color: "#000" }}>
            Or continue with Email
          </TextLegend>
          <Line />
        </LineView>
        <Input />
        <Input />
        <Input />
        <Input />
      </Content>
    </Container>
  );
};
export default Cadastro;
