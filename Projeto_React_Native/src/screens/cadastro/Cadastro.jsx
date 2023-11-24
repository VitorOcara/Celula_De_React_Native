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
import { Alert, View } from "react-native";

const Cadastro = () => {
  const [Email, setEmail] = useState("");
  const [Senha, setSenha] = useState("");
  const [Senha02, setSenha02] = useState("");
  const [error, setError] = useState("Preencha Todos os Campos");
  const [ativado, setAtivado] = useState(false);

  const pressCadastro = () => {
    if (Email !== null && Senha === Senha02) {
      setAtivado(true);
    }else{
      Alert.alert("Informações Inválidas! Verifique se as Digitou corretamente")
    }
    ativado === true ? singUp : Alert.alert(error);
  };

  const singUp = () => {
    UsuarioService.singUp(auth, Email, Senha, (userCredential) => {
      console.log(userCredential);
    });
  };

  return (
    <Container>
      <Content>
        <TextTitle>Cadastro</TextTitle>

        <InputView>
          <TextLegend>Email</TextLegend>
          <CadastroInput
            value={Email}
            onChangeText={(Email) => setEmail(Email)}
            onBlur={() => (Email ? null : Alert.alert("Email Obrigatório"))}
          />
          <TextLegend>Senha</TextLegend>
          <CadastroInput
            secureTextEntry={true}
            value={Senha}
            onChangeText={(Senha) => setSenha(Senha)}
          />
          <TextLegend>Confirme a senha</TextLegend>
          <CadastroInput
            secureTextEntry={true}
            value={Senha02}
            onChangeText={(Senha02) => setSenha02(Senha02)}
          />
        </InputView>

        <CadastroButton onPress={pressCadastro}>
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
