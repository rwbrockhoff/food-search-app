import React from "react";
import { View, TextInput, Text, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const SearchBar = ({ term, onSearchChange, onSubmit }) => {
  return (
    <View style={styles.background}>
      <AntDesign name="search1" size={20} />
      <TextInput
        style={styles.input}
        placeholder="Search"
        autoCapitalize="none"
        autoCorrect={false}
        value={term}
        onChangeText={onSearchChange}
        onEndEditing={onSubmit}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    height: 45,
    backgroundColor: "#F0F0F0",
    borderRadius: 5,
    padding: 10,
    marginHorizontal: 15,
    marginVertical: 20,
    flexDirection: "row"
  },
  input: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16
  }
});

export default SearchBar;
