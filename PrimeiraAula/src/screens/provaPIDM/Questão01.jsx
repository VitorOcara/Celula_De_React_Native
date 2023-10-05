import { MeusDados } from "./Data";
import {
  Container,
  IconPressable,
  IconView,
  ItemText,
  ItemView,
  StyledSectionList,
  TextTitle,
} from "./styles";
import { View } from "react-native";

const Questão01 = ({ navigation }) => {

  return (
    <Container>
      <StyledSectionList
        sections={MeusDados}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item }) => {
          return (
            <ItemView>
              <IconPressable onPress={() => navigation.navigate("Modal", item)}>
                <IconView name={item.icon} />
                <View>
                  <ItemText>{item.local}</ItemText>
                  <ItemText>{item.hora}</ItemText>
                </View>
              </IconPressable>

              <ItemText>{item.custo}</ItemText>
            </ItemView>
          );
        }}
        renderSectionHeader={({ section: { title } }) => (
          <TextTitle>{title}</TextTitle>
        )}
      />
    </Container>
  );
};

export default Questão01;
