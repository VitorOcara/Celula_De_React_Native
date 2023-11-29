import { useEffect, useState } from "react";
import { Container, Icons, TextBranco } from "../../globalStyle";
import { AlignView, ButtonIcon, Content, InputView } from "./styles";
import { CadastroInput, TextLegend, TextTitle } from "../../cadastro/styles";
import { AddConsultaBtt, AddHora } from "../addConsulta/styles";
import DateTimePicker from "@react-native-community/datetimepicker";
import ConsultaService from "../../../firebase/services/ConsultaService";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../../firebase/firebase_config";
import { Alert } from "react-native";

const EditConsulta = ({ route, navigation }) => {
  const item = route.params;
  const [local, setLocal] = useState(item.local);
  const [hora, setHora] = useState(new Date(item.hora));
  const [data, setData] = useState(new Date(item.data));
  const [loading, setLoading] = useState(false);
  const [uid, setUid] = useState();
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUid(user.uid);
      }
    });
  }, []);

  hora.setHours(hora.getHours() - 3);
  const horaFormatada = hora.toISOString().split("T")[1].split(".")[0];
  const dataFormatada = data.toISOString().split("T")[0];

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || (mode === "time" ? hora : data);
    setShow(Platform.OS === "ios");
    if (mode === "time") {
      setHora(currentDate);
    } else {
      setData(currentDate);
    }
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode("date");
  };

  const showTimepicker = () => {
    showMode("time");
  };

  const handleEditConsulta = (itemId) => {
    ConsultaService.editConsultasFirebase(
      uid,
      itemId,
      local,
      hora.toString(),
      data.toString()
    );

    Alert.alert("Atualizado com sucesso!");
    navigation.goBack();
  };

  return (
    <Container>
      <ButtonIcon onPress={() => navigation.goBack()}>
        <Icons name="arrow-back" color="white" />
      </ButtonIcon>
      <Content>
        <AlignView>
          <TextTitle>Editar Informações</TextTitle>
          <InputView>
            <TextLegend style={{ marginTop: 40 }}>Local</TextLegend>
          </InputView>
          <InputView>
            <CadastroInput
              value={local}
              onChangeText={(local) => setLocal(local)}
            />
          </InputView>
          <InputView>
            <AddHora onPress={showDatepicker}>
              <Icons name="calendar" color={"white"} />
            </AddHora>
            <TextBranco style={{ marginLeft: 15 }}>
              Data: {dataFormatada}
            </TextBranco>
          </InputView>

          <InputView>
            <AddHora onPress={showTimepicker}>
              <Icons name="timer" color={"white"} />
            </AddHora>
            <TextBranco style={{ marginLeft: 15 }}>
              Hora: {horaFormatada}
            </TextBranco>
          </InputView>

          {show && (
            <DateTimePicker
              testID="dateTimePicker"
              value={mode === "time" ? hora : data}
              mode={mode}
              is24Hour={true}
              display="default"
              onChange={onChange}
            />
          )}

          <AddConsultaBtt onPress={() => handleEditConsulta(item.id)}>
            <TextLegend style={{ marginTop: 0, color: "white" }}>
              Atualizar
            </TextLegend>
          </AddConsultaBtt>
        </AlignView>
      </Content>
    </Container>
  );
};

export default EditConsulta;
