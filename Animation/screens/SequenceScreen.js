import React, { useRef } from "react";
import { View, Text, StyleSheet, Animated, Button, Easing } from "react-native";


const SequenceScreen = (props) => {
    const fadeAnim = useRef(new Animated.Value(1)).current;
    const spinAnim = useRef(new Animated.Value(0)).current;
    const spin = spinAnim.interpolate({
        inputRange: [0, 1],
        outputRange: ["0deg", "360deg"],
    });
    const animated = () => {
        Animated.sequence([

            Animated.timing(fadeAnim, {
                toValue: 0,
                duration: 2000,
                useNativeDriver: true,
            }),
            Animated.timing(fadeAnim, {
                toValue: 1,
                duration: 2000,
                useNativeDriver: true,
            }),
            Animated.timing(spinAnim, {
                toValue: 1,
                duration: 3000,
                // easing: Easing.bounce,
            }),
            Animated.timing(spinAnim, {
                toValue: 0,
                duration: 3000,
                // easing: Easing.bounce,
            }),

        ]).start(() => { fadeAnim.setValue(1); spinAnim.setValue(0);});
    };
    return (
        <View style={styles.screen}>
            <Animated.Image
                style={{ width: 180, height: 150, opacity: fadeAnim, transform: [{ rotate: spin }] }}
                source={require("../assets/it-logo.png")}
            />
            {/* <Animated.View style={[styles.fadingContainer,
            { opacity: fadeAnim }]}>
                <Text style={styles.fadingText}>Fading View!</Text>
            </Animated.View> */}
            <Button title="RUN SEQUENCE" onPress={animated} />

        </View>

    );
};



// SequenceScreen.navigationOptions = (navigationData) => {
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
});

export default SequenceScreen;
