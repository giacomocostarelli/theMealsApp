import React from "react";

import { HeaderButtons, Item } from "react-navigation-header-buttons";

import MealList from "../components/MealList";
import CustomHeaderButton from "../components/CustomHeaderButton";

import { useSelector } from "react-redux";
import { View, StyleSheet } from "react-native";
import DefaultText from "../components/DefaultText";

const FavoriteScreen = (props) => {
	const favMeals = useSelector((state) => state.meals.favoriteMeals);

	if (favMeals.length === 0 || !favMeals) {
		return (
			<View style={styles.content}>
				<DefaultText>No favorite meals found. Start adding some!</DefaultText>
			</View>
		);
	}
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
const styles = StyleSheet.create({
	content: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
});

export default FavoriteScreen;
