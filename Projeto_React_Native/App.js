import Navigation from "./src/screens/Nav";
import Cadastro from "./src/screens/cadastro/Cadastro";
// import Home from "./src/screens/home/Home";
import { NavigationContainer } from '@react-navigation/native';


export default function App() {
  return(
    <NavigationContainer>
      <Navigation />
    </NavigationContainer>
  );
}
