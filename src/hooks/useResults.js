import { useState, useEffect } from "react";
import yelp from "../api/yelp";

export default () => {
  const [results, setResults] = useState([]);
  const [error, setErrorMessage] = useState("");

  useEffect(() => {
    searchApi("pasta");
  }, []);

  const searchApi = async term => {
    try {
      const response = await yelp.get("/search", {
        params: {
          limit: 50,
          term,
          location: "Boulder"
        }
      });
      setResults(response.data.businesses);
    } catch (err) {
      setErrorMessage("Oops! Something went wrong.");
    }
  };

  return [searchApi, results, error];
};
