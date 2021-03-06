import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";

const ResultItem = ({ item }) => {
  return (
    <View style={styles.listContainer}>
      <Image source={{ uri: item.image_url || null }} style={styles.image} />
      <Text style={styles.itemName}>{item.name}</Text>
      <Text style={styles.itemDescription}>
        {item.rating} Stars | {item.review_count} Reviews
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    height: 200,
    marginHorizontal: 10,
    marginLeft: 15
  },
  itemName: {
    fontWeight: "bold",
    fontSize: 16,
    marginTop: 10
  },
  itemDescription: {
    color: "#777777",
    fontSize: 10
  },
  image: {
    width: 250,
    height: 150,
    borderRadius: 10
  }
});

export default ResultItem;
