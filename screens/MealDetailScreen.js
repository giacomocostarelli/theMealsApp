import React from "react";
import { View, Text, Button } from "react-native";

const MealDetailScreen = (props) => {
	return (
		<View style={styles.screen}>
			<Text>The MealDetail screen!</Text>
			<Button
				title="Go back to Categories"
				onPress={() => {
					props.navigation.popToTop();
				}}
			/>
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

export default MealDetailScreen;
