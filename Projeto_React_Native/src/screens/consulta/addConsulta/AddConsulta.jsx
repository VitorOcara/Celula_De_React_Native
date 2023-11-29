import React, { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { AddConsultaBtt, AddHora, AlignView } from "./styles";
import ConsultaService from "../../../firebase/services/ConsultaService";
import { auth } from "../../../firebase/firebase_config";
import { Container, Icons, TextBranco } from "../../globalStyle";
import DateTimePicker from "@react-native-community/datetimepicker";
import {
  TextLegend,
  TextTitle,
  InputView,
  CadastroInput,
} from "../../cadastro/styles";
import { Alert } from "react-native";

const AddConsulta = ({ state, descriptors, navigation }) => {
  const [local, setLocal] = useState();
  const [hora, setHora] = useState(new Date(1598051730000));
  const [data, setData] = useState(new Date(1598051730000));
  const [loading, setLoading] = useState(false);
  const [uid, setUid] = useState();
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);

  hora.setHours(hora.getHours() - 3);
  const horaFormatada = hora.toISOString().split("T")[1].split(".")[0];

  const dataFormatada = data.toISOString().split("T")[0];
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUid(user.uid);
      }
    });
  }, []);

  const handleAddConsulta = () => {
    if (local) {
      setLoading(true);
      ConsultaService.addConsultaFirebase(
        uid,
        local,
        hora.toString(),
        data.toString()
      );
      Alert.alert("Adicionado com sucesso!");
      setLoading(false);
    }
  };

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

  return (
    <Container>
      <TextTitle>Adicionar Consulta</TextTitle>

      <InputView>
        <TextLegend>Local</TextLegend>
        <CadastroInput
          placeholder={"Local"}
          value={local}
          onChangeText={(local) => setLocal(local)}
        />
      </InputView>

      <AlignView>
        <AddHora onPress={showTimepicker}>
          <Icons name="timer" color={"white"} />
        </AddHora>
        <TextBranco style={{ marginLeft: 15 }}>Hora </TextBranco>
      </AlignView>

      <AlignView>
        <AddHora onPress={showDatepicker}>
          <Icons name="calendar" color={"white"} />
        </AddHora>
        <TextBranco style={{ marginLeft: 15 }}>Dia</TextBranco>
      </AlignView>

      <AlignView>
        <TextBranco>Dia: {dataFormatada}, Hora: </TextBranco>
        <TextBranco>{horaFormatada}</TextBranco>
      </AlignView>

      <InputView style={{ paddingBottom: 15 }}>
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
      </InputView>

      <AddConsultaBtt onPress={handleAddConsulta}>
        <TextLegend style={{ marginTop: 0, color: "white" }}>
          Adicionar
        </TextLegend>
      </AddConsultaBtt>
    </Container>
  );
};

export default AddConsulta;
