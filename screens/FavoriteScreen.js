import React from "react";

import { HeaderButtons, Item } from "react-navigation-header-buttons";

import MealList from "../components/MealList";
import CustomHeaderButton from "../components/CustomHeaderButton";

import { MEALS } from "../data/dummy-data";

const FavoriteScreen = (props) => {
	const favMeals = MEALS.filter((meal) => meal.id === "m1" || meal.id === "m2");

	return <MealList listData={favMeals} navigation={props.navigation} />;
};

FavoriteScreen.navigationOptions = (navData) => {
	return {
		headerTitle: "Favorites",
		headerLeft: () => (
			<HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
				<Item
					title="Menu"
					iconName="ios-menu"
					onPress={() => {
						navData.navigation.toggleDrawer();
					}}
				/>
			</HeaderButtons>
		),
	};
};
const styles = {};

export default FavoriteScreen;
