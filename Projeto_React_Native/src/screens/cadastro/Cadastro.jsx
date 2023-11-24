import { useState } from "react";
import { Container, VoidView } from "../globalStyle";
import UsuarioService from "../firebase/services/UsuarioService";
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

import { auth } from "../firebase/firebase_config";

const Cadastro = () => {
  const [Usuario, setUsuario] = useState("");
  const [Senha, setSenha] = useState("");
  const [Email, setEmail] = useState("");


  const singUp = ()=>{
    UsuarioService.singUp(auth, Email, Senha, 
      (userCredential)=> {console.log(userCredential)})
  }

  return (
    <Container>
      <Content>
        <TextTitle>Cadastro</TextTitle>

        <InputView>
          <TextLegend>Nome de Usuário</TextLegend>
          <CadastroInput
            value={Usuario}
            onChangeText={(Usuario) => setUsuario(Usuario)}
          />
          <TextLegend>Email</TextLegend>
          <CadastroInput
            value={Email}
            onChangeText={(Email) => setEmail(Email)}
          />
          <TextLegend>Senha</TextLegend>
          <CadastroInput
            value={Senha}
            onChangeText={(Senha) => setSenha(Senha)}
          />
        </InputView>

        <CadastroButton onPress={singUp} >
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
