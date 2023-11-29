import React, { useState } from "react";
import { CheckBox, Container } from "../globalStyle";
import UsuarioService from "../../firebase/services/UsuarioService";
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
import { auth } from "../../firebase/firebase_config";
import { Alert, View, Modal, ActivityIndicator } from "react-native";

const Cadastro = ({ navigation }) => {
  const [Email, setEmail] = useState("");
  const [Senha, setSenha] = useState("");
  const [Senha02, setSenha02] = useState("");
  const [oculto, setOculto] = useState(true);
  const [loading, setLoading] = useState(false);

  const pressCadastro = async () => {
    try {
      setLoading(true);
      const userCredential = await UsuarioService.singUp(auth, Email, Senha);
      if (userCredential) {
        console.log("Login bem-sucedido");
        setLoading(false);
        navigation.navigate("Main");
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
      Alert.alert(error.message);
    }
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
            secureTextEntry={oculto}
            value={Senha}
            onChangeText={(Senha) => setSenha(Senha)}
          />
          <TextLegend>Confirme a senha</TextLegend>
          <CadastroInput
            secureTextEntry={oculto}
            value={Senha02}
            onChangeText={(Senha02) => setSenha02(Senha02)}
          />
        </InputView>

        <InputView style={{ flexDirection: "row" }}>
          <CheckBox
            onPress={(isChecked) => setOculto(!isChecked)}
            fillColor="black"
          />
          <TextLegend style={{ fontSize: 18 }}>Mostrar Senha</TextLegend>
        </InputView>

        <CadastroButton onPress={pressCadastro}>
          <TextButton>Cadastrar-se</TextButton>
        </CadastroButton>

        <LoginRedirect onPress={() => navigation.navigate("Login")}>
          <TextLegend style={{ fontSize: 15 }}>
            Já possui uma conta?{" "}
          </TextLegend>
          <TextLegend
            style={{ fontSize: 15, color: "white", fontWeight: "bold" }}
          >
            Entrar
          </TextLegend>
        </LoginRedirect>

        <Modal transparent={true} animationType="slide" visible={loading}>
          <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          >
            <ActivityIndicator size="large" color="black" />
          </View>
        </Modal>
      </Content>
    </Container>
  );
};

export default Cadastro;
