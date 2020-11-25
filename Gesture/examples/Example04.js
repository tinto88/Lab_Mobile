import React, { useRef } from "react";
import { Animated, PanResponder, StyleSheet, View } from "react-native";

const Example04 = () => {
  const pan = useRef(new Animated.ValueXY()).current;
  const scale = useRef(new Animated.Value(1)).current;
  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderGrant: () => {
      pan.setOffset({
        x: pan.x._value,
        y: pan.y._value,
      });
      pan.setValue({ x: 0, y: 0 });
    },
    onPanResponderMove: (evt, gestureState) => {
      const touches = evt.nativeEvent.touches;

      if (touches.length >= 2) {
        const disX0 = touches[0].locationX;
        const disX1 = touches[1].locationX;
        const disY0 = touches[0].locationY;
        const disY1 = touches[1].locationY;
        const cal = Math.sqrt(
          Math.pow(disX1 - disX0, 2) + Math.pow(disY1 - disY0, 2)
        );
        Animated.spring(scale, {
          toValue: cal / 500 + 1,
          friction: 3,
          useNativeDriver: false,
        }).start();
      } else if (touches.length == 1) {
        Animated.event(
          [
            null,
            {
              dx: pan.x, // x,y are Animated.Value
              dy: pan.y,
            },
          ],
          { useNativeDriver: false }
        )(evt, gestureState);
      }
    },

    onPanResponderRelease: () => {
      pan.flattenOffset();
      Animated.spring(scale, {
        toValue: 1,
        friction: 3,
        useNativeDriver: false,
      }).start();
    },
  });

  return (
    <View style={styles.container}>
      <Animated.Image
        {...panResponder.panHandlers}
        style={[pan.getLayout(), styles.box, { transform: [{ scale: scale }] }]}
        source={require("../assets/it-logo.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  box: {
    // backgroundColor: "#61dafb",
    width: 80,
    height: 80,
    borderRadius: 4,
  },
});

export default Example04;
