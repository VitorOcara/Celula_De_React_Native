import { Container, VoidView } from "../globalStyle";
import {
  Content,
  InputView,
  CadastroButton,
  CadastroInput,
  TextButton,
  TextLegend,
  TextTitle,
  LoginRedirect,
} from "./styles";

const Cadastro = () => {
  return (
    <Container>
      <Content>
        <TextTitle>Cadastro</TextTitle>

        <InputView>
          <TextLegend>Nome de Usuário</TextLegend>
          <CadastroInput />
          <TextLegend>Email</TextLegend>
          <CadastroInput />
          <TextLegend>Senha</TextLegend>
          <CadastroInput />
        </InputView>

        <CadastroButton>
          <TextButton>Cadastrar-se</TextButton>
        </CadastroButton>

        <LoginRedirect>
          <TextLegend>Já possui uma conta? </TextLegend>
          <TextLegend style={{ color: "white", fontWeight: "bold" }}>
            Entrar
          </TextLegend>
        </LoginRedirect>
      </Content>
    </Container>
  );
};

export default Cadastro;
