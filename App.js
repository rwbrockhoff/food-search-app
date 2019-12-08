import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import SearchScreen from "./src/screens/SearchScreen";

const navigator = createStackNavigator(
  {
    Search: SearchScreen
  },
  {
    initialRouteName: "Search",
    defaultNavigationOptions: {
      title: "Find Me Food"
    }
  }
);

export default createAppContainer(navigator);

// Navigator doesn't return a React Component. CreateAppContainer is a wrapper that helps navigator return an RC with the navigation we set up above.
