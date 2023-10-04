import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/home/Home";
import Cadastro from "../screens/cadastro/Cadastro";
import Login from "../screens/login/Login";

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Cadastro" component={Cadastro} />
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
};

export default Navigation;
