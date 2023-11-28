import {
  FooterContainer,
  FooterContent,
  FooterDivisor,
  FooterIcons,
  FooterPresseable,
  FooterText,
} from "./styles";

export function Footer({navigation}) {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterPresseable >
          <FooterIcons name={"home"} />
          <FooterText>Tela Inicial</FooterText>
        </FooterPresseable>
        <FooterDivisor />

        <FooterPresseable>
          <FooterIcons name={"add-circle"} />
          <FooterText>Add Consulta</FooterText>
        </FooterPresseable>
        <FooterDivisor />

        <FooterPresseable>
          <FooterIcons name={"list"} />
          <FooterText>Consultas</FooterText>
        </FooterPresseable>
      </FooterContent>
    </FooterContainer>
  );
}
