import React, { useState } from "react";
import { View, ScrollView, Text, StyleSheet, Image } from "react-native";
import { EvilIcons } from "@expo/vector-icons";
import SearchBar from "../components/SearchBar";
import ResultList from "../components/ResultList";
import useResults from "../hooks/useResults";

const SearchScreen = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchApi, results, loading, error] = useResults();

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

      <View style={styles.locationContainer}>
        <EvilIcons name="location" style={styles.locationIcon} />
        <Text style={styles.locationText}>Boulder, CO</Text>
      </View>

      {error ? <Text style={styles.errorMessage}>{error}</Text> : null}

      {loading ? (
        <Text style={styles.loadingText}>Loading...</Text>
      ) : (
        <ScrollView
          contentContainerStyle={{ paddingBottom: 20 }}
          showsVerticalScrollIndicator={false}
        >
          <ResultList title="Cheap" list={filterResultsByPrice("$")} />
          <ResultList title="Affordable" list={filterResultsByPrice("$$")} />
          <ResultList title="Expensive" list={filterResultsByPrice("$$$")} />
        </ScrollView>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  loadingText: {
    color: "#0facf3",
    textAlign: "center",
    textAlignVertical: "center",
    flex: 1,
    paddingBottom: 100
  },
  locationContainer: {
    alignSelf: "flex-end",
    marginRight: 20,
    flexDirection: "row",
    alignItems: "center",
    opacity: 0.8,
    paddingBottom: 10
  },
  locationText: {
    color: "#0facf3"
  },
  locationIcon: {
    fontSize: 16,
    marginRight: 2,
    color: "#0facf3"
  },
  errorMessage: {
    textAlign: "center",
    color: "red",
    marginVertical: 20
  }
});

export default SearchScreen;
