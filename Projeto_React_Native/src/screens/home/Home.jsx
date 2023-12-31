import { Pressable } from "react-native";
import { Footer } from "../../componnents/footer/Footer";
import { TextLegend } from "../cadastro/styles";
import { Container } from "../globalStyle";
import { Content } from "./styles";

const Home = ({ navigation }) => {
  return (
    <Container>
      <Content>
        <TextLegend >Aplicação criada para apresentação na Disciplina de Introdução à programação para desing</TextLegend>
      </Content>
    </Container>
  );
};

export default Home;
