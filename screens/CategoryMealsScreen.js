import React from "react";
import { View, Text, Button } from "react-native";

const CategoryMealsScreen = (props) => {
	return (
		<View style={styles.screen}>
			<Text>The CategoryMeal screen!</Text>
			<View style={styles.buttons}>
				<Button
					title="Go to Detail"
					onPress={() => {
						props.navigation.navigate("MealDetail");
					}}
				/>
			</View>
		</View>
	);
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

export default CategoryMealsScreen;
