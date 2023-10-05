import { createStackNavigator } from "@react-navigation/stack";
// import Home from "../screens/home/Home";
// import Cadastro from "../screens/cadastro/Cadastro";
// import Login from "../screens/login/Login";
import Questão01 from "../screens/provaPIDM/Questão01";
import Questão02 from "../screens/provaPIDM/Questão02";

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Group>
        <Stack.Screen name="Questao01" component={Questão01} />
      </Stack.Group>

      <Stack.Group screenOptions={{ presentation: "modal" }}>
        <Stack.Screen name="Modal" component={Questão02} />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default Navigation;
