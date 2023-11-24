import { Header } from "../../componnents/header/Header";
import { Container } from "../globalStyle";
import { Content } from "./styles";

const Home = () => {
  return (
    <Container>
      <Header />
      <Content></Content>
    </Container>
  );
};

export default Home;
