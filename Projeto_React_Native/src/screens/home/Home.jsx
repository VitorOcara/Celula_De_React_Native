import { Footer } from "../../componnents/footer/Footer";
import { Container } from "../globalStyle";
import { Content } from "./styles";

const Home = ({navigation}) => {
  return (
    <Container>
      <Content></Content>
      <Footer />
    </Container>
  );
};

export default Home;
