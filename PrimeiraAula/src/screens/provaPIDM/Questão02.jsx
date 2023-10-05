import { useState } from "react";
import { ContainerModal, IconView, ItemText, TitleModal } from "./styles";

const Questão02 = ({ route, navigation }) => {
  const item = route.params;
  const [dados, setDados] = useState();

  return (
    <ContainerModal>
      <IconView name={item.icon} />
      <TitleModal>{item.local}</TitleModal>
      <ItemText>{item.preço}</ItemText>
      <ItemText>{item.hora}</ItemText>
    </ContainerModal>
  );
};

export default Questão02;
