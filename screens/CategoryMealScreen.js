import React from "react";
import { View, Text } from "react-native";

const CategoriesMealScreen = (props) => {
	return (
		<View style={styles.screen}>
			<Text>The CategoriesMeal screen!</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
});

export default CategoriesMealScreen;
