import { Text, View } from "react-native";
import { Container } from "../styles";
import {
  BottonView,
  ButtonText,
  Content,
  LeftCloudBot,
  LeftCloudTop,
  LegendText,
  MidView,
  MidViewLeftCloud,
  MidViewRightCloud,
  RigthCloudBot,
  RigthCloudTop,
  SingInButton,
  SubTitle,
  Title,
  TopView,
} from "./styles";

const Home = ({ navigation }) => {

  const palavra = "Oiii negada";
  const handleSingUp = () =>{
    navigation.navigate('Cadastro', palavra)
  }

  return (
    <Container>
      <Content>
        <TopView>
          <Title>Welcome To Shh!!</Title>
          <SubTitle>A Hub Where Whispers Echo Loudest</SubTitle>
        </TopView>

        <MidView>
          <MidViewLeftCloud>
            <LeftCloudTop />
            <LeftCloudBot />
          </MidViewLeftCloud>
          <MidViewRightCloud>
            <RigthCloudTop />
            <RigthCloudBot />
          </MidViewRightCloud>
        </MidView>

        <BottonView>
          <SingInButton onPress={handleSingUp} >
            <ButtonText>Sing In</ButtonText>
          </SingInButton>
          <View style={{ flexDirection: "row" }}>
            <LegendText>Already have an Account? </LegendText>
            <LegendText style={{ color: "black" }}>Login</LegendText>
          </View>
        </BottonView>
      </Content>
    </Container>
  );
};

export default Home;
