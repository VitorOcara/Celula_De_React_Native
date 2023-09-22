import { View, Text } from "react-native";
import {
  ButtonSingIn,
  Container,
  StyledView,
  StyledView2,
  ViewTop,
  styles,
} from "./styles";
import { useState } from "react";

const MainScreen = () => {
  const [pressed, setPressed] = useState(false);

  return (
    <Container>
      <View style={styles.body}>
        <ViewTop>
          <Text style={styles.textTitle}>Welcome To</Text>
          <Text style={styles.textTitle}>Shh!</Text>
          <Text style={styles.textSubTitle}>
            A hub Where Whispers Echo Loundest
          </Text>
        </ViewTop>
        <View style={styles.mid}>
          <StyledView>
            <Text>A</Text>
          </StyledView>

          <StyledView2>
            <Text>A</Text>
          </StyledView2>
        </View>
        <View style={styles.botton}>
          <ButtonSingIn
            onPress={() => {
              setPressed(true);
            }}
          >
            <Text style={{ color: "white" }}>Sing In</Text>
          </ButtonSingIn>
        </View>
      </View>
    </Container>
  );
};

export default MainScreen;
