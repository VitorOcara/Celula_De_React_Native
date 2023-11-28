import { createStackNavigator } from "@react-navigation/stack";
import Home from "../home/Home";
import Login from "../login/Login";
import Cadastro from "../cadastro/Cadastro";

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Group>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Cadastro" component={Cadastro} />
      </Stack.Group>

      <Stack.Group screenOptions={{ presentation: "modal" }}></Stack.Group>
    </Stack.Navigator>
  );
};

export default Navigation;
