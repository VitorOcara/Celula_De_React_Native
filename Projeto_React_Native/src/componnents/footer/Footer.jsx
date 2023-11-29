import React, { useState } from "react";
import {
  FooterContainer,
  FooterContent,
  FooterDivisor,
  FooterIcons,
  FooterPresseable,
  FooterText,
} from "./styles";

export function Footer({ state, descriptors, navigation }) {
  const [selectedTab, setSelectedTab] = useState("Home");

  const handleTabPress = (tabName) => {
    setSelectedTab(tabName);
    const selectedDescriptor =
      descriptors[state.routes.find((r) => r.name === tabName).key];
    navigation.navigate(selectedDescriptor.route.name);
  };

  return (
    <FooterContainer>
      <FooterContent>
        <FooterPresseable
          onPress={() => handleTabPress("Home")}
          selected={selectedTab === "Home"}
        >
          <FooterIcons
            name={"home"}
            color={selectedTab === "Home" ? "blue" : "black"}
          />
          <FooterText>Tela Inicial</FooterText>
        </FooterPresseable>
        <FooterDivisor />
        <FooterPresseable
          onPress={() => handleTabPress("AddConsulta")}
          selected={selectedTab === "AddConsulta"}
        >
          <FooterIcons
            name={"add-circle"}
            color={selectedTab === "AddConsulta" ? "blue" : "black"}
          />
          <FooterText>Add Consulta</FooterText>
        </FooterPresseable>
        <FooterDivisor />

        <FooterPresseable
          onPress={() => handleTabPress("ListConsulta")}
          selected={selectedTab === "ListConsulta"}
        >
          <FooterIcons
            name={"list"}
            color={selectedTab === "ListConsulta" ? "blue" : "black"}
          />
          <FooterText>Listagem</FooterText>
        </FooterPresseable>
      </FooterContent>
    </FooterContainer>
  );
}
