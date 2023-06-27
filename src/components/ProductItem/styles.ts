import styled from "styled-components/native";
import { FontAwesome } from "@expo/vector-icons";

export const Root = styled.View`
  flex-direction: row;
  border: 1px #d1d1d1;
  border-radius: 10px;
  background-color: #fff;
  margin-vertical: 5px;
`;
export const Image = styled.Image`
  flex: 2;
  height: 150px;
  resize-mode: contain;
`;
export const RightContainer = styled.View`
  padding: 10px;
  flex: 3;
`;
export const Title = styled.Text`
  font-size: 18px;
`;
export const RatingsContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin-vertical: 5px;
`;
export const Star = styled(FontAwesome)`
  margin-right: 2px;
`;
export const TotalRatings = styled.Text``;
export const Price = styled.Text`
  font-size: 18px;
  font-weight: bold;
`;
export const OldPrice = styled.Text`
  font-size: 12px;
  font-weight: normal;
  text-decoration-line: line-through;
`;
