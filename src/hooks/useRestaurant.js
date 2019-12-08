import { useState, useEffect } from "react";
import yelp from "../api/yelp";

export default restaurantId => {
  const [restaurant, setRestaurant] = useState(null);

  const getRestaurant = async id => {
    const { data } = (await yelp.get(`/${id}`)) || {};
    setRestaurant(data);
  };

  useEffect(() => {
    getRestaurant(restaurantId);
  }, []);

  return [restaurant];
};
