import { LoginRedirect } from "../cadastro/styles";
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

        <LoginRedirect>
          <TextLegend>Não possui uma conta? </TextLegend>
          <TextLegend style={{ color: "white", fontWeight: "bold" }}>
            Cadastre-se
          </TextLegend>
        </LoginRedirect>
      </Content>
    </Container>
  );
};

export default Login;
