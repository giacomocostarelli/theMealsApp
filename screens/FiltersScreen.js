import React from "react";
import { View, Text } from "react-native";

const FiltersScreen = (props) => {
	return (
		<View style={styles.screen}>
			<Text>The Filters screen!</Text>
		</View>
	);
};

FiltersScreen.navigationOptions = {
	headerTitle: "Filter Meals",
};

const styles = {
	screen: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
};

export default FiltersScreen;
