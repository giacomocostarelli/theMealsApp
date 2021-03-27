import React from "react";
import { View, Text } from "react-native";

const FavoriteScreen = (props) => {
	return (
		<View style={styles.screen}>
			<Text>The Favorite screen!</Text>
		</View>
	);
};

const styles = {
	screen: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
};

export default FavoriteScreen;
