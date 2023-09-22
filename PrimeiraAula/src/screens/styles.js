import { StyleSheet, Text, View } from "react-native";
import styled from "styled-components";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#8C5CB3",
  },
  body: {
    padding: "5%",
    height: "100%",
    justifyContent: "space-between",
    width: "100%",
  },
  imput: {
    backgroundColor: "red",
  },
  text: {
    color: "black",
  },
  textTitle: {
    color: "white",
    fontSize: 30,
    fontWeight: "bold",
  },
  textSubTitle: {
    color: "black",
    fontWeight: "bold",
    maxWidth: "70%",
  },
  top: {
    height: "30%",
    backgroundColor: "gray",
    width: "100%",
  },
  mid: {
    backgroundColor: "green",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: "40%",
  },
  botton: {
    height: "30%",
    backgroundColor: "gray",
    width: "100%",
    alignItems: "center",
  },
  buttonSingIn: {
    height: "20%",
    width: "50%",
    backgroundColor: "black",
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
  },
});

export const Container = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
    background-color: #8C5CB3;
`;

export const ViewTop = styled.View`
  height: 30%;
  background-color: gray;
  width: 100%;
  
`;

export const StyledView = styled.View`
  background-color: aliceblue;
  height: 100%;
  width: 40%;
  justify-content: flex-start;
`;

export const StyledView2 = styled.View`
  background-color: aliceblue;
  height: 100%;
  width: 40%;
  justify-content: flex-end;
  align-items: flex-end;
`;

export const ButtonSingIn = styled.Pressable`
  height: 20%;
  width: 50%;
  background-color: black;
  border-radius: 30px;
  justify-content: center;
  align-items: center;
`;