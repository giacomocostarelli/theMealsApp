import React, { useState, useEffect, useCallback } from "react";
import { View, Text, StyleSheet, Switch } from "react-native";

import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { useDispatch } from "react-redux";
import CustomHeaderButton from "../components/CustomHeaderButton";
import { setFilters } from "../store/actions/meals";

const FilterSwitch = (props) => {
	return (
		<View style={styles.filterContainer}>
			<Text style={{ fontSize: 18 }}>{props.label}</Text>
			<Switch
				style={styles.switch}
				trackColor={{ true: "#98a6d3", false: "#d8d8d8" }}
				thumbColor={props.state ? "#324ea8" : "#808080"}
				value={props.state}
				onValueChange={props.onChange}
			/>
		</View>
	);
};

const FiltersScreen = (props) => {
	const { navigation } = props;

	const [isGlutenFree, setIsGlutenFree] = useState(false);
	const [isLactoseFree, setIsLactoseFree] = useState(false);
	const [isVegan, setIsVegan] = useState(false);
	const [isVegetarian, setIsVegetarian] = useState(false);

	const dispatch = useDispatch();

	const saveFilters = useCallback(() => {
		const appliedFilters = {
			glutenFree: isGlutenFree,
			lactoseFree: isLactoseFree,
			vegan: isVegan,
			vegetarian: isVegetarian,
		};

		dispatch(setFilters(appliedFilters));
	}, [isGlutenFree, isLactoseFree, isVegan, isVegetarian, dispatch]);

	useEffect(() => {
		navigation.setParams({
			save: saveFilters,
		});
	}, [saveFilters]);

	return (
		<View style={styles.screen}>
			<Text style={styles.title}>Available Filters / Restrictions</Text>
			<FilterSwitch
				style={styles.switch}
				label={"Gluten-free"}
				state={isGlutenFree}
				onChange={(newValue) => {
					setIsGlutenFree(newValue);
					console.log(newValue ? "Filter Activated" : "Filter Deactivated");
				}}
			/>
			<FilterSwitch
				label={"Lactose-free"}
				state={isLactoseFree}
				onChange={(newValue) => {
					setIsLactoseFree(newValue);
					console.log(newValue ? "Filter Activated" : "Filter Deactivated");
				}}
			/>
			<FilterSwitch
				label={"Vegan"}
				state={isVegan}
				onChange={(newValue) => {
					setIsVegan(newValue);
					console.log(newValue ? "Filter Activated" : "Filter Deactivated");
				}}
			/>
			<FilterSwitch
				label={"Vegetarian"}
				state={isVegetarian}
				onChange={(newValue) => {
					setIsVegetarian(newValue);
					console.log(newValue ? "Filter Activated" : "Filter Deactivated");
				}}
			/>
		</View>
	);
};

FiltersScreen.navigationOptions = (navData) => {
	return {
		headerTitle: "Filters",
		headerLeft: () => (
			<HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
				<Item
					style={styles.headerIcon}
					title="Menu"
					iconName="ios-menu"
					onPress={() => {
						navData.navigation.toggleDrawer();
					}}
				/>
			</HeaderButtons>
		),
		headerRight: () => (
			<HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
				<Item
					style={styles.headerIcon}
					title="Menu"
					iconName="ios-save"
					onPress={() => {
						navData.navigation.getParam("save")();
					}}
				/>
			</HeaderButtons>
		),
	};
};

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		alignItems: "center",
	},
	title: {
		fontFamily: "open-sans-bold",
		fontSize: 20,
		margin: 20,
		textAlign: "center",
	},

	filterContainer: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		width: "80%",
		marginVertical: 15,
	},
	switch: {
		transform: [{ scaleX: 1.5 }, { scaleY: 1.5 }],
	},
});

export default FiltersScreen;
