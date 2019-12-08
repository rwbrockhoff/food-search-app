import { useState, useEffect } from "react";
import yelp from "../api/yelp";

export default () => {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setErrorMessage] = useState("");

  useEffect(() => {
    searchApi("coffee");
  }, []);

  const searchApi = async term => {
    !loading && setLoading(true); // <== Loading UI between searches

    try {
      const response = await yelp.get("/search", {
        params: {
          limit: 50,
          term,
          location: "Boulder"
        }
      });
      setResults(response.data.businesses);
      setLoading(false);
    } catch (err) {
      setErrorMessage("Oops! Something went wrong.");
    }
  };

  return [searchApi, results, loading, error];
};
