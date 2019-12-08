import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity
} from "react-native";
import { withNavigation } from "react-navigation";
import ResultItem from "./ResultItem";

const ResultList = ({ title, list, navigation }) => {
  if (!list.length) return null;
  return (
    <View>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={list}
        keyExtractor={result => result.id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => navigation.navigate("Restaurant", { id: item.id })}
            >
              <ResultItem item={item} />
            </TouchableOpacity>
          );
        }}
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

export default withNavigation(ResultList);
