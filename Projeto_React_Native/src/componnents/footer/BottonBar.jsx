

export function BottonBar() {

   
  
    return (
      <BottonBarContainer>
        <IconBtn onPress={() => navigation.navigate("PerguntaTematica")}>
          <IconAntd name="chat-question-outline" screen={screen} />
          <SubView screen={screen} />
        </IconBtn>
        <Divider />
        <IconBtn onPress={() => navigation.navigate("Sobre")}>
          <Picture source={img} />
          <SubViewCuidadus screen={screen} />
        </IconBtn>
        <Divider />
        <IconBtn onPress={() => navigation.navigate("Configurações")}>
          <Icon name="settings-outline" screen={screen} />
          <SubViewConfig screen={screen} />
        </IconBtn>
      </BottonBarContainer>
    );
  }