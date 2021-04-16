import React from "react";
import {
	View,
	Text,
	StyleSheet,
	TouchableOpacity,
	ImageBackground,
} from "react-native";

import DefaultText from "../components/DefaultText";

const MealItem = (props) => {
	return (
		<View style={styles.mealItem}>
			<TouchableOpacity onPress={props.onSelectMeal}>
				<View>
					<View style={{ ...styles.mealRow, ...styles.mealHeader }}>
						<ImageBackground
							source={{ uri: props.image }}
							style={styles.bgImage}
						>
							<Text style={styles.title} numberOfLines={1}>
								{props.title}
							</Text>
						</ImageBackground>
					</View>
					<View style={{ ...styles.mealRow, ...styles.mealDetail }}>
						<DefaultText>{props.duration}m</DefaultText>
						<DefaultText>{props.complexity.toUpperCase()}</DefaultText>
						<DefaultText>{props.affordability.toUpperCase()}</DefaultText>
					</View>
				</View>
			</TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({
	mealItem: {
		marginVertical: 10,
		height: 200,
		width: "90%",
		backgroundColor: "#ccc",
		alignSelf: "center",
		borderRadius: 10,
		overflow: "hidden",
	},
	mealRow: {
		flexDirection: "row",
	},
	mealHeader: {
		height: "85%",
	},
	mealDetail: {
		paddingHorizontal: 10,
		justifyContent: "space-between",
		alignItems: "center",
		height: "15%",
	},
	bgImage: {
		width: "100%",
		height: "100%",
		justifyContent: "flex-end",
	},
	title: {
		fontFamily: "open-sans-bold",
		fontSize: 17,
		color: "white",
		backgroundColor: "rgba(0,0,0,0.4)",
		paddingVertical: 5,
		paddingHorizontal: 12,
		textAlign: "center",
	},
});

export default MealItem;
