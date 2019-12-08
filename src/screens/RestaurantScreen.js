import React from "react";
import { View, Text, StyleSheet } from "react-native";
import useRestaurant from "../hooks/useRestaurant";

const RestaurantScreen = ({ navigation }) => {
  const restaurantId = navigation.getParam("id");
  const [restaurant] = useRestaurant(restaurantId);

  return (
    <View>
      <Text>Restaurant View</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default RestaurantScreen;
