import React from "react";
import { View, Image, StyleSheet, FlatList } from "react-native";
import useRestaurant from "../hooks/useRestaurant";

const RestaurantScreen = ({ navigation }) => {
  const restaurantId = navigation.getParam("id");
  const [restaurant] = useRestaurant(restaurantId);

  if (!restaurant) return null;
  else {
    return (
      <View style={styles.container}>
        <FlatList
          data={restaurant.photos}
          keyExtractor={photo => photo}
          renderItem={({ item }) => (
            <Image source={{ uri: item }} style={styles.image} />
          )}
        />
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: { alignItems: "center" },
  image: { height: 200, width: 300, borderRadius: 10, marginVertical: 10 }
});

export default RestaurantScreen;
