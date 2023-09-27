import styled from "styled-components";

export const Content = styled.View`
    height: 95%;
    width: 95%;
    align-items: center;
`;


export const TextTitle = styled.Text`
    color: white;
    font-size: 40px;
    font-weight: bold;
`;

export const TextLegend = styled.Text`
    color: white;
    font-size: 20px;
    font-weight: bold;
`;

export const ButtonLoginWithGoogle = styled.Pressable`
    margin-top: 5%;
    background-color: black;
    height: 10%;
    width: 80%;
    border-radius: 50px;
    align-items: center;
    justify-content: center;
`;

export const LineView = styled.View`
     margin-top: 5%;
    justify-content: space-around;
    align-items: center;
    flex-direction: row;
    width: 100%;
`;
export const Line= styled.View`
    height: 1.4px;
    background-color: black;
    width: 20%;
`;

export const Input = styled.TextInput`
    margin-top: 5%;
    height: 7%;
    width: 70%;
    border-radius: 60px;
    background-color: white;
    padding: 0 5% ;
    font-size: 20px;
`;