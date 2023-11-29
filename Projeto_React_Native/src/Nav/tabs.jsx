import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useNavigation } from '@react-navigation/native';  // Importe useNavigatio
import Home from "../screens/home/Home";
import ListConsulta from "../screens/consulta/listConsulta/ListConsulta";
import { Footer } from "../componnents/footer/Footer";
import AddConsulta from "../screens/consulta/addConsulta/AddConsulta";

const Tab = createBottomTabNavigator();

const MyTabs = () => {
  const navigation = useNavigation();  // Obtenha o objeto navigation usando useNavigation

  return (
    <Tab.Navigator
      screenOptions={{headerShown:false}}
      tabBar={({ state, descriptors, navigation }) => (
        <>
          <Footer
            state={state}
            descriptors={descriptors}
            navigation={navigation}
          />
        </>
      )}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="AddConsulta" component={AddConsulta} />
      <Tab.Screen name="ListConsulta" component={ListConsulta} />
    </Tab.Navigator>
  );
};


export default MyTabs;