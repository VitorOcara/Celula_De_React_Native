import React, { useEffect, useState } from "react";
import { Container, Icons, TextBranco } from "../../globalStyle";
import { ButtonIcon, ConsultaItem, ConsultaList, InfoText } from "./styles";
import ConsultaService from "../../../firebase/services/ConsultaService";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../../firebase/firebase_config";
import { Pressable, Text, View } from "react-native";

const ListConsulta = ({ navigation }) => {
  const [data, setData] = useState([]);
  const [uid, setUid] = useState();

  const fetchData = async () => {
    const user = await new Promise((resolve) => {
      onAuthStateChanged(auth, (userData) => {
        resolve(userData);
      });
    });

    if (user) {
      setUid(user.uid);

      try {
        const consultasObj = await ConsultaService.getConsultasFirebase(uid);

        // Converte o objeto em um array de objetos com o ID incluso
        const consultasArray = Object.keys(consultasObj || {}).map((id) => ({
          id,
          ...consultasObj[id],
        }));

        setData(consultasArray || []); // Se `consultas` for nulo, define um array vazio
      } catch (error) {
        console.error("Erro ao buscar consultas:", error);
      }
    }
  };

  useEffect(() => {
    fetchData();
  }, [uid]);

  const handleDeleteConsulta = async (consultaId) => {
    try {
      console.log(consultaId);
      await ConsultaService.removeConsultasFirebase(uid, consultaId);
      fetchData();
    } catch (error) {
      console.error("Erro ao excluir consulta:", error);
    }
  };
  // console.log(data);

  return (
    <Container>
      <ConsultaList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ConsultaItem>
            <InfoText>{item.local}</InfoText>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-evenly",
              }}
            >
              <ButtonIcon >
                <Icons name="pencil" color="black" />
              </ButtonIcon>
              <ButtonIcon onPress={() => handleDeleteConsulta(item.id)}>
                <Icons name="trash" color="red" />
              </ButtonIcon>
            </View>
          </ConsultaItem>
        )}
      />
      <ButtonIcon
        style={{ margin: 15, backgroundColor: "black" }}
        onPress={fetchData}
      >
        <TextBranco style={{ marginTop: 0, marginRight: 10 }}>
          Atualizar
        </TextBranco>
        <Icons name="reload" color="white" />
      </ButtonIcon>
    </Container>
  );
};

export default ListConsulta;
