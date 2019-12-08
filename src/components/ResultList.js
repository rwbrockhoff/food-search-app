import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import ResultItem from "./ResultItem";

const ResultList = ({ title, list }) => {
  return (
    <View>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={list}
        keyExtractor={result => result.id}
        renderItem={({ item }) => <ResultItem item={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontWeight: "bold",
    fontSize: 20,
    marginVertical: 10,
    marginLeft: 15
  }
});

export default ResultList;
