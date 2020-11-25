import React, { useRef } from "react";
import { View, Text, StyleSheet, Animated, Button, Easing } from "react-native";



const PararellScreen = (props) => {
    const springVal = useRef(new Animated.Value(0.3)).current;
    // const spin = spinAnim.interpolate({
    //     inputRange: [0, 1],
    //     outputRange: ["0deg", "360deg"],
    // });
    const translateXVal = useRef(new Animated.Value(0)).current;
    const transX = translateXVal.interpolate({
        inputRange: [0, 0.25, 0.5, 0.75, 1],
        outputRange: [0, 100, 0, -100, 0,],
    });
    const animated = () => {
        Animated.parallel([
            Animated.spring(springVal, {
                toValue: 1,
                friction: 1,
            }),
            Animated.timing(translateXVal, {
                toValue: 1,
                duration: 3000,
                // easing: Easing.bounce,
            }),
            // Animated.timing(translateXVal, {
            //     toValue: 0,
            //     duration: 2000,
            // }),


        ]).start(() => { springVal.setValue(0.3), translateXVal.setValue(0) });
    };
    return (
        <View style={styles.screen}>
            <Animated.Image
                style={{ width: 180, height: 150, transform: [{ scale: springVal }] }}
                source={require("../assets/it-logo.png")}
            />
            <Animated.View
                style={{ transform: [{ translateX: transX }] }}
            >
                <Text style={{ color: "orange", fontSize:30 }} >Welcome to Faculty of IT!</Text>
            </Animated.View>
            <Button  title="RUN PARALLEL" onPress={animated} />

        </View >

    );
};



PararellScreen.navigationOptions = (navigationData) => {
    return {
        headerTitle: "Your Favorites"
    };
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
});

export default PararellScreen;
