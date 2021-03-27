import React from "react";
import { View, Text, Button } from "react-native";

const CategoriesScreen = (props) => {
	return (
		<View style={styles.screen}>
			<Text>The Categories screen!</Text>
			<View style={styles.buttons}>
				<Button
					title="Go to Meals"
					onPress={() => {
						props.navigation.navigate("CategoryMeals");
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

export default CategoriesScreen;
