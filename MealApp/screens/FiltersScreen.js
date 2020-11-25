import React, { useState } from "react";
import { View, Text, StyleSheet, Switch } from "react-native";
import CustomHeaderButton from "../components/CustomHeaderButton";
import { HeaderButtons, Item } from "react-navigation-header-buttons"

const FiltersScreen = (props) => {
  const [isGlutenFree, setGlutenFree] = useState(false);
  const [isLactoseFree, setLactoseFree] = useState(false);
  const [isVegan, setisVegan] = useState(false);
  const [isVegetarian, setisVegetarian] = useState(false);

  const toggleGlutenFreeSwitch = () => setGlutenFree(previousState => !previousState);
  const toggleLactoseFreeSwitch = () => setLactoseFree(previousState => !previousState);
  const toggleVeganSwitch = () => setisVegan(previousState => !previousState);
  const toggleVegetarianSwitch = () => setisVegetarian(previousState => !previousState);

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Available Filters / Restrictions</Text>
      <View style={styles.filterContainer}>
        <Text>GluetenFree</Text>
        <Switch
          trackColor={{ false: "#bdbdbd", true: "orange" }}
          thumbColor={"orange"}
          value={isGlutenFree}
          onValueChange={toggleGlutenFreeSwitch}
        />
      </View>
      <View style={styles.filterContainer}>
        <Text>LactoseFree</Text>
        <Switch
          trackColor={{ false: "#bdbdbd", true: "orange" }}
          thumbColor={"orange"}
          value={isLactoseFree}
          onValueChange={toggleLactoseFreeSwitch}
        />
      </View>
      <View style={styles.filterContainer}>
        <Text>Vegan</Text>
        <Switch
          trackColor={{ false: "#bdbdbd", true: "orange" }}
          thumbColor={"orange"}
          value={isVegan}
          onValueChange={toggleVeganSwitch}
        />
      </View>
      <View style={styles.filterContainer}>
        <Text>Vegetarian</Text>
        <Switch
          trackColor={{ false: "#bdbdbd", true: "orange" }}
          thumbColor={"orange"}
          value={isVegetarian}
          onValueChange={toggleVegetarianSwitch}
        />
      </View>
    </View>
  );
};

FiltersScreen.navigationOptions = (navigationData) => {
  return {
    headerTitle: "Filter Meals",
    headerLeft: () => {
      return (
        <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
          <Item
            title="Menu"
            iconName="ios-menu"
            onPress={() => {
              navigationData.navigation.toggleDrawer();
            }}
          />
        </HeaderButtons>
      );
    },
    headerRight: () => {
      return (
        <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
          <Item
            title="Save"
            iconName="ios-save"
            onPress={() => {

            }}
          />
        </HeaderButtons>
      );
    },
  };
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    // justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 18,
    margin: 20,
    textAlign: "center",
    fontWeight: "bold",
  },
  filterContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "45%",
    marginVertical: 15,
  },
});

export default FiltersScreen;
