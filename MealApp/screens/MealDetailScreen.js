import React from "react";
import { useCallback, useEffect } from "react"
import { View, Text, Button, StyleSheet, Image, } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
// import { MEALS } from "../data/dummy-data";
import CustomHeaderButton from "../components/CustomHeaderButton";
import { HeaderButtons, Item } from "react-navigation-header-buttons"
import { useSelector, useDispatch } from "react-redux";
import { toggleFavorite } from "../store/actions/mealsAction"

const MealDetailScreen = (props) => {
  // เขียนโค้ดเพิ่ม เพื่อดึงอ็อบเจ๊คเมนูอาหารที่ผู้ใช้เลือกเอาไว้
  const meaId = props.navigation.getParam("mealId");
  const availableMeals = useSelector(state => state.meals.filteredMeals)
  const selectedMeals = availableMeals.find((mea) => mea.id === meaId);

  const currentMealIsFav = useSelector((state) =>
    state.meals.favoriteMeals.some((mea) => mea.id === meaId)
  );
  const dispatch = useDispatch()

  const toggleFavoriteHandler = useCallback(() => {
    dispatch(toggleFavorite(meaId));
  }, [dispatch, meaId]);

  useEffect(() => {
    props.navigation.setParams({
      toggleFav: toggleFavoriteHandler,
    });
  }, [toggleFavoriteHandler]);

  useEffect(() => {
    props.navigation.setParams({ isFav: currentMealIsFav });
  }, [currentMealIsFav]);

  const image = { uri: selectedMeals.imageUrl };
  return (
    <View style={styles.screen}>
      <ScrollView style={styles.scrollContainer}>
        <Image source={image} style={styles.bgImage} resizeMode="stretch" />
        <View style={styles.container}>
          <Text>{selectedMeals.duration} m</Text>
          <Text>{selectedMeals.complexity.toUpperCase()}</Text>
          <Text>{selectedMeals.affordability.toUpperCase()}</Text>
        </View>
        <View>
          <Text style={styles.title}>Ingredients</Text>
          {selectedMeals.ingredients.map((data) => {
            return (
              <Text key={data} style={styles.data}>{data}</Text>
            )

          })}
        </View>
        <View>
          <Text style={styles.title}>Step</Text>
          {selectedMeals.steps.map((data) => {
            return (
              <Text key={data} style={styles.data} > {data}</Text>
            )

          })}
        </View>
        <View style={styles.button}>
          <Button
            title="Go Back"

            onPress={() => {
              // เขียนโค้ดเพิ่ม
              // props.navigation.navigate("Categories");
              props.navigation.popToTop();
            }}
          />
        </View>

      </ScrollView>

    </View >
  );
};

MealDetailScreen.navigationOptions = (navigationData) => {
  // เขียนโค้ดเพิ่มเพื่อแสดงชื่อเมนูอาหารที่เลือกให้เป็นเฮดเดอร์
  const meaId = navigationData.navigation.getParam("mealId");
  const meaTitle = navigationData.navigation.getParam("mealTitle");
  const toggleFavorite = navigationData.navigation.getParam("toggleFav");
  // const selectedMeals = MEALS.find((mea) => mea.id === meaId);
  const isFavorite = navigationData.navigation.getParam("isFav");

  return {
    // headerTitle: selectedMeals.title,
    headerTitle: meaTitle,
    headerRight: () => {
      return (
        <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
          <Item
            title="Star"
            iconName={isFavorite ? "ios-star" : "ios-star-outline"}
            onPress={toggleFavorite}

          />
        </HeaderButtons>
      );
    }
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    // justifyContent: "center",
    alignItems: "center",

  },
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 30,
    paddingTop: 10
  },
  bgImage: {
    height: 245,
    justifyContent: "flex-end",
  },
  title: {
    fontSize: 18,
    margin: 20,
    textAlign: "center",
    fontWeight: "bold",
  },
  data: {
    paddingHorizontal: 25,
    paddingBottom: 15
  },
  scrollContainer: {
    alignSelf: "stretch"
  },
  button: {
    marginVertical: 15,
    marginHorizontal: 50
  }
});

export default MealDetailScreen;
