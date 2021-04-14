import React from "react";
import { View, Text } from "react-native";

import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderButton from "../components/CustomHeaderButton";

const FiltersScreen = (props) => {
	return (
		<View style={styles.screen}>
			<Text>The Filters screen!</Text>
		</View>
	);
};

FiltersScreen.navigationOptions = (navData) => {
	return {
		headerTitle: "Filters",
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

const styles = {
	screen: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
};

export default FiltersScreen;
