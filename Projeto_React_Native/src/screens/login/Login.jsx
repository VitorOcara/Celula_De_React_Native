import { Container } from "../globalStyle";
import {
  Content,
  InputView,
  LoginButton,
  LoginInput,
  TextButton,
  TextLegend,
  TextTitle,
} from "./styles";

const Login = () => {
  return (
    <Container>
      <Content>
        <TextTitle>Login</TextTitle>

        <InputView>
          <TextLegend>Email ou Usuário</TextLegend>
          <LoginInput />
          <TextLegend>Senha</TextLegend>
          <LoginInput />
        </InputView>

        <LoginButton>
          <TextButton>Login</TextButton>
        </LoginButton>
      </Content>
    </Container>
  );
};

export default Login;
