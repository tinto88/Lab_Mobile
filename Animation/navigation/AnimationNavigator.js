// import คอมโพเนนต์ที่จำเป็น
import React from "react";
// import { AntDesign } from "@expo/vector-icons";
// import { createStackNavigator } from "react-navigation-stack";
// import { createDrawerNavigator } from "react-navigation-drawer";
import { createAppContainer } from "react-navigation";
import { Ionicons } from '@expo/vector-icons';

import { createBottomTabNavigator } from "react-navigation-tabs";
import SpringScreen from "../screens/SpringScreen"
import PararellScreen from "../screens/PararellScreen"
import SequenceScreen from "../screens/SequenceScreen"


const MealsFavTabNavigator = createBottomTabNavigator(
    {
        Spring: {
        screen: SpringScreen,
        navigationOptions: {
          tabBarIcon: (tabInfo) => {
            return (<Ionicons name="ios-restaurant" size={24} color={tabInfo.tintColor} />);
          },
        }
      },
      Sequence: {
        screen: SequenceScreen,
        navigationOptions: {
          tabBarIcon: (tabInfo) => {
            return (<Ionicons name="ios-star-outline" size={24} color={tabInfo.tintColor} />);
          },
          tabBarLabel: "Sequence",
        }
      },
      Pararell: {
        screen: PararellScreen,
        navigationOptions: {
          tabBarIcon: (tabInfo) => {
            return (<Ionicons name="ios-star" size={24} color={tabInfo.tintColor} />);
          },
          tabBarLabel: "Pararell",
        }
      },
      
    },
    {
      tabBarOptions: { activeTintColor: "orange", }
    }
  )
  
  
  
  export default createAppContainer(MealsFavTabNavigator);