import { useState } from "react";
import { LoginRedirect } from "../cadastro/styles";
import { CheckBox, Container } from "../globalStyle";
import {
  Content,
  InputView,
  LoginButton,
  LoginInput,
  TextButton,
  TextLegend,
  TextTitle,
} from "./styles";
import UsuarioService from "../../firebase/services/UsuarioService";
import { auth } from "../../firebase/firebase_config";
import { ActivityIndicator, Alert, Modal, View } from "react-native";

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [oculto, setOculto] = useState(true);

  const onPress = async () => {
    try {
      const userCredential = await UsuarioService.singIn(auth, email, senha);
      if (userCredential) {
        console.log("Login bem-sucedido");
        navigation.navigate("Home");
      }
    } catch (error) {
      Alert.alert(error.message);
    }
  };

  return (
    <Container>
      <Content>
        <TextTitle>Login</TextTitle>

        <InputView>
          <TextLegend>Email ou Usuário</TextLegend>
          <LoginInput value={email} onChangeText={(email) => setEmail(email)} />
          <TextLegend>Senha</TextLegend>
          <LoginInput
            secureTextEntry={oculto}
            value={senha}
            onChangeText={(senha) => setSenha(senha)}
          />
        </InputView>
        <InputView style={{ flexDirection: "row" }}>
          <CheckBox
            onPress={(isChecked) => {
              setOculto(!isChecked);
            }}
            fillColor="black"
          />
          <TextLegend style={{ fontSize: 18 }}>Mostrar Senha</TextLegend>
        </InputView>

        <LoginButton onPress={onPress}>
          <TextButton>Login</TextButton>
        </LoginButton>

        <LoginRedirect onPress={() => navigation.navigate("Cadastro")}>
          <TextLegend style={{ fontSize: 15 }}>
            Não possui uma conta?{" "}
          </TextLegend>
          <TextLegend
            style={{ color: "white", fontSize: 15, fontWeight: "bold" }}
          >
            Cadastre-se
          </TextLegend>
        </LoginRedirect>
      </Content>
    </Container>
  );
};

export default Login;
