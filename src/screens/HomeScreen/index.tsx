import React from "react";
import { FlatList } from "react-native";

import ProductItem from "../../components/ProductItem";
import { Page } from "./styles";

import products from "../../data/products";

const HomeScreen = () => {
  return (
    <Page>
      {/* Render Product Component */}
      <FlatList
        data={products}
        renderItem={({ item }) => <ProductItem item={item} />}
      />
    </Page>
  );
};

export default HomeScreen;
