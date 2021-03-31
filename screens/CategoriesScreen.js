import React from "react";
import {
	View,
	Text,
	FlatList,
	StyleSheet,
	TouchableOpacity,
	Platform,
} from "react-native";

import { CATEGORIES } from "../data/dummy-data";

const CategoriesScreen = (props) => {
	const renderGridItem = (itemData) => {
		return (
			<TouchableOpacity
				style={styles.gridItem}
				onPress={() => {
					props.navigation.navigate({
						routeName: "CategoryMeals",
						params: {
							categoryId: itemData.item.id,
						},
					});
				}}
			>
				<View
					style={{
						...styles.container,
						...{ backgroundColor: itemData.item.color },
					}}
				>
					<Text style={styles.title} numberOfLines={2}>
						{itemData.item.title}
					</Text>
				</View>
			</TouchableOpacity>
		);
	};

	return (
		<FlatList
			keyExtractor={(item, index) => item.id}
			data={CATEGORIES}
			renderItem={renderGridItem}
			numColumns={2}
		/>
	);
};

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	gridItem: {
		flex: 1,
		margin: 15,
		height: 150,
	},
	container: {
		flex: 1,
		borderRadius: 10,
		padding: 15,
		justifyContent: "flex-end",
		alignItems: "flex-end",
	},
	title: {
		fontFamily: "open-sans-bold",
		fontSize: 19,
		textAlign: "right",
	},
});

export default CategoriesScreen;
