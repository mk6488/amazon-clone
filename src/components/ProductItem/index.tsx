import React from "react";

import {
  Root,
  Image,
  RightContainer,
  Title,
  RatingsContainer,
  Star,
  Price,
  OldPrice,
} from "./styles";
import { Text } from "react-native";

interface ProductItemProps {
  item: {
    id: string;
    title: string;
    image: string;
    avgRating: number;
    ratings: number;
    price: number;
    oldPrice?: number;
  };
}

const ProductItem = ({ item }: ProductItemProps) => {
  return (
    <Root>
      <Image source={{ uri: item.image }} />
      <RightContainer>
        <Title numberOfLines={3}>{item.title}</Title>

        {/* Ratings */}
        <RatingsContainer>
          {[0, 0, 0, 0, 0].map((el, i) => (
            <Star
              key={`${item.id}-${i}`}
              name={i < Math.floor(item.avgRating) ? "star" : "star-o"}
              size={18}
              color="#e47911"
            />
          ))}

          <Text>{item.ratings}</Text>
        </RatingsContainer>
        <Price>
          ${item.price}
          {item.oldPrice && <OldPrice> ${item.oldPrice}</OldPrice>}
        </Price>
      </RightContainer>
    </Root>
  );
};

export default ProductItem;
