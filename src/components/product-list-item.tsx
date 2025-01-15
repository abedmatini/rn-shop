import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { Product } from "@/assets/products";

export const ProductListItem = ({ product }: { product: Product }) => {
  return (
    <View>
      <View style={styles.itemImageContainer}>
        <Image source={product.heroImage} style={styles.itemImage} />
      </View>
      <View style={styles.itemTextContainer}>
        <Text style={styles.itemTitle}>{product.title}</Text>
        <Text style={styles.itemPrice}>${product.price}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    width: "48%",
    backgroundColor: "white",
    marginVertical: 8,
    borderRadius: 10,
    overflow: "hidden",
  },
  itemImageContainer: {
    width: "100%",
    borderRadius: 10,
    height: 150,
  },
  itemImage: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  itemTextContainer: {
    padding: 8,
    alignItems: "flex-start",
    gap: 4,
  },
  itemTitle: {
    fontSize: 16,
    color: "#888",
  },
  itemPrice: {
    fontSize: 14,
    fontWeight: "bold",
  },
});
