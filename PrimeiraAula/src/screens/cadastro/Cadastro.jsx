import { View } from "react-native";
import { Container } from "../styles";
import Checkbox from "expo-checkbox";
import {
  ButtonLoginWithGoogle,
  Content,
  Input,
  Line,
  LineView,
  TextLegend,
  TextTitle,
} from "./styles";
import { useState } from "react";

const Cadastro = ({ route, navigation }) => {
  const [marcado, setMarcado] = useState(false);

  const palavra = route.params;

  const alterarCheckBox = () => {
    setMarcado(!marcado);
  };

  return (
    <Container>
      <Content>
        <TextTitle>Sing up To SHH</TextTitle>
        <ButtonLoginWithGoogle onPress={() => navigation.navigate("Login")}>
          <TextLegend>Sing in with google</TextLegend>
        </ButtonLoginWithGoogle>

        <LineView>
          <Line />
          <TextLegend style={{ color: "#000" }}>
            salve e {palavra}
          </TextLegend>
          <Line />
        </LineView>

        <Input placeholder="Enter your Name" />
        <Input placeholder="Enter your Username" />
        <Input placeholder="Enter your Email" />
        <Input placeholder="Enter your Password" />

        <View
          style={{
            flexDirection: "row",
            width: "80%",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Checkbox
            value={marcado}
            onValueChange={alterarCheckBox}
            color={marcado ? "#4630EB" : "white"}
          />
          <TextLegend>
            I agree with the terms of service and privacy policy
          </TextLegend>
        </View>

        <View
          style={{ width: "60%", alignSelf: "flex-end", alignItems: "center" }}
        >
          <ButtonLoginWithGoogle
            onPress={() => navigation.navigate("Home")}
            style={{ height: "24%" }}
          >
            <TextLegend>Create Account</TextLegend>
          </ButtonLoginWithGoogle>

          <TextLegend>Already have an Account?</TextLegend>
          <TextLegend style={{ color: "#000" }}>Login</TextLegend>
        </View>
      </Content>
    </Container>
  );
};
export default Cadastro;
