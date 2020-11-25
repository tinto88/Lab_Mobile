import React from "react";
import { StyleSheet } from "react-native";
// import { createStore, combineReducers } from "redux"
// import { Provider } from "react-redux"

import AnimationNavigator from "./navigation/AnimationNavigator"

// const rootReducer = combineReducers({
//   meals: mealsReducer
// })

// const store = createStore(rootReducer);


export default function App() {
  // เพิ่มโค้ดส่วนนี้
  return (
    // <Provider store={store}><MealsNavigator /></Provider>
    <AnimationNavigator/>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "blue",
    alignItems: "center",
    justifyContent: "center",
  },
});
