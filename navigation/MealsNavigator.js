import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import Colors from "../constants/Colors";
import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import MealDetailScreen from "../screens/MealDetailScreen";

const MealsNavigator = createStackNavigator(
	//1st param: object with Key: {Value} => ScreenId : {screen: ScreenComponentName, navigationOptions {...}}
	{
		Categories: {
			screen: CategoriesScreen,
			navigationOptions: {
				headerTitle: "Meal Categories",
			},
		},
		CategoryMeals: {
			screen: CategoryMealsScreen,
		},
		MealDetail: MealDetailScreen,
	},
	//2nd param: default options for all screens in the navigator
	{
		initialRouteName: "Categories",
		defaultNavigationOptions: {
			headerStyle: {
				backgroundColor: "#324ea8",
			},
			headerTintColor: "white",
		},
	}
);

export default createAppContainer(MealsNavigator);
