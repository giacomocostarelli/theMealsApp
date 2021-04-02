import React from "react";
import { View, Text, Button } from "react-native";

import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderButton from "../components/CustomHeaderButton";
import { MEALS } from "../data/dummy-data";

const MealDetailScreen = (props) => {
	const mealId = props.navigation.getParam("mealId");

	const selectedMeal = MEALS.find((meal) => meal.id === mealId);

	return (
		<View style={styles.screen}>
			<Text>{selectedMeal.title}</Text>
			<Button
				title="Go back to Categories"
				onPress={() => {
					props.navigation.popToTop();
				}}
			/>
		</View>
	);
};

MealDetailScreen.navigationOptions = (navigationData) => {
	const mealId = navigationData.navigation.getParam("mealId");
	const selectedMeal = MEALS.find((meal) => meal.id === mealId);
	return {
		headerTitle: selectedMeal.title,
		headerRight: () => (
			<HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
				<Item
					title="favorite"
					iconName="ios-star"
					onPress={() => {
						console.log("Mark as Favorite!");
					}}
				/>
			</HeaderButtons>
		),
	};
};

const styles = {
	screen: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	buttons: {
		margin: 10,
	},
};

export default MealDetailScreen;
