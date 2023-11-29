import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "../screens/login/Login";
import Cadastro from "../screens/cadastro/Cadastro";
import MyTabs from "./tabs";
import EditConsulta from "../screens/consulta/editConsulta/EditConsulta";

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Group>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Cadastro" component={Cadastro} />
      </Stack.Group>

      <Stack.Group screenOptions={{ presentation: "modal" }}>
        <Stack.Screen name="Main" component={MyTabs} />
        <Stack.Screen name="EditConsulta" component={EditConsulta} />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default Navigation;
