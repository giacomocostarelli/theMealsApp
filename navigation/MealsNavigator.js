import React from "react";
import { Platform, Text, Stylesheet } from "react-native";

import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import { createDrawerNavigator } from "react-navigation-drawer";

import { Ionicons } from "@expo/vector-icons";
import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import MealDetailScreen from "../screens/MealDetailScreen";
import FavoriteScreen from "../screens/FavoriteScreen";
import FiltersScreen from "../screens/FiltersScreen";

const deafultStackNavOptions = {
	headerStyle: {
		backgroundColor: "#324ea8",
	},
	headerTitleStyle: {
		fontFamily: "open-sans-bold",
	},
	headerTintColor: "white",
};

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
		defaultNavigationOptions: deafultStackNavOptions,
	}
);

const FavNavigator = createStackNavigator(
	{
		Favorites: FavoriteScreen,
		MealDetail: MealDetailScreen,
	},
	{
		//initialRouteName: "Categories",
		defaultNavigationOptions: deafultStackNavOptions,
	}
);

const mealsFavTabNavigatorConfig = {
	Meals: {
		screen: MealsNavigator,
		navigationOptions: {
			//flashy transition solved.
			sceneAnimationEnabled: "false",
			tabBarLabel: "Categories",
			tabBarIcon: (tabInfo) => {
				return (
					<Ionicons name="ios-restaurant" size={25} color={tabInfo.tintColor} />
				);
			},
			tabBarColor: "#324ea8",
			tabBarLabel: <Text style={{ fontFamily: "open-sans-bold" }}>Meals</Text>,
		},
	},
	Favorites: {
		screen: FavNavigator,
		navigationOptions: {
			//flashy transition solved.
			sceneAnimationEnabled: "false",
			tabBarIcon: (tabInfo) => {
				return <Ionicons name="ios-star" size={25} color={tabInfo.tintColor} />;
			},
			tabBarColor: "#324ea8",
			tabBarLabel: (
				<Text style={{ fontFamily: "open-sans-bold" }}>Favorites</Text>
			),
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

const FiltersNavigator = createStackNavigator(
	{
		Filters: FiltersScreen,
	},
	{
		defaultNavigationOptions: deafultStackNavOptions,
	}
);

const MainNavigator = createDrawerNavigator(
	{
		MealsFav: {
			screen: MealsFavTabNavigator,
			navigationOptions: {
				drawerLabel: "Meals",
			},
		},
		Filters: FiltersNavigator,
	},
	{
		contentOptions: {
			activeTintColor: "#324ea8",
			labelStyle: {
				fontFamily: "open-sans-bold",
				fontSize: 18,
			},
		},
	}
);

export default createAppContainer(MainNavigator);
