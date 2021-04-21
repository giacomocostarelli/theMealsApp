import React from "react";

import { HeaderButtons, Item } from "react-navigation-header-buttons";

import MealList from "../components/MealList";
import CustomHeaderButton from "../components/CustomHeaderButton";

import { useSelector } from "react-redux";

const FavoriteScreen = (props) => {
	const favMeals = useSelector((state) => state.meals.favoriteMeals);

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
