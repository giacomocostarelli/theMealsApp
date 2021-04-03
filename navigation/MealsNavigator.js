import React from "react";
import { Platform } from "react-native";

import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";

import { Ionicons } from "@expo/vector-icons";
import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import MealDetailScreen from "../screens/MealDetailScreen";
import FavoriteScreen from "../screens/FavoriteScreen";

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

const mealsFavTabNavigatorConfig = {
	Meals: {
		screen: MealsNavigator,
		navigationOptions: {
			tabBarLabel: "Categories",
			tabBarIcon: (tabInfo) => {
				return (
					<Ionicons name="ios-restaurant" size={25} color={tabInfo.tintColor} />
				);
			},
			tabBarColor: "#324ea8",
		},
	},
	Favorites: {
		screen: FavoriteScreen,
		navigationOptions: {
			tabBarIcon: (tabInfo) => {
				return <Ionicons name="ios-star" size={25} color={tabInfo.tintColor} />;
			},
			tabBarColor: "#324ea8",
		},
	},
};

const MealsFavTabNavigator =
	Platform.OS === "android"
		? //android navigator
		  createMaterialBottomTabNavigator(mealsFavTabNavigatorConfig, {
				activeColor: "#fff",
				shifting: true,
				barStyle: {
					width: "100%",
					backgroundColor: "white",
				},
		  })
		: //IOS navigator
		  createBottomTabNavigator(mealsFavTabNavigatorConfig, {
				tabBarOptions: {
					style: {
						height: 64,
						alignItems: "center",
					},
					tabStyle: {
						height: 50,
						backgroundColor: "#fff",
					},
					activeTintColor: "#324ea8",
				},
		  });

export default createAppContainer(MealsFavTabNavigator);
