import React, { useState } from "react";
import { View, ScrollView, Text, StyleSheet } from "react-native";
import SearchBar from "../components/SearchBar";
import ResultList from "../components/ResultList";
import useResults from "../hooks/useResults";

const SearchScreen = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchApi, results, error] = useResults();

  const filterResultsByPrice = price => {
    return results.filter(result => result.price === price);
  };

  return (
    <View style={styles.container}>
      <SearchBar
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        onSubmit={() => searchApi(searchTerm)}
      />

      {error ? <Text style={styles.errorMessage}>{error}</Text> : null}
      <ScrollView
        contentContainerStyle={{ paddingBottom: 20 }}
        showsVerticalScrollIndicator={false}
      >
        <ResultList title="Cheap" list={filterResultsByPrice("$")} />
        <ResultList title="Affordable" list={filterResultsByPrice("$$")} />
        <ResultList title="Expensive" list={filterResultsByPrice("$$$")} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  errorMessage: {
    textAlign: "center",
    color: "red",
    marginVertical: 20
  }
});

export default SearchScreen;
