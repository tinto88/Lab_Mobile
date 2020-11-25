import React, { useRef } from "react";
import { View, Text, StyleSheet, Button, Animated } from "react-native";



const SpringScreen = (props) => {
    const springVal = useRef(new Animated.Value(0.3)).current;
    const spring = () => {
        Animated.spring(springVal, {
            toValue: 1,
            friction: 1,
        }).start(() => { springVal.setValue(0.3); });
    };
    return (
        <View style={styles.screen}>
            <Animated.Image
                style={{ width: 180, height: 150, transform: [{ scale: springVal }] }}
                source={require("../assets/it-logo.png")}
            />
            <Button style={styles.button} title="RUN Spring" onPress={spring} />
        </View>

    );
};



// SpringScreen.navigationOptions = (navigationData) => {
//   return {
//     headerTitle: "Your Favorites"
//   };
// };

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    button: {
        flex: 2,
        flexDirection: "flex-end"
    }
});

export default SpringScreen;
