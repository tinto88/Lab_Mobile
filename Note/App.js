import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import { StyleSheet, Text, TouchableOpacity, View, TextInput, Button } from "react-native";

class App extends Component {

  state = {
    text: "",
    texts: [],
  };
  myTextInput = React.createRef();

  setText = (e) => {
    this.setState({
      text: e
    });

  };

  saveText = () => {
    let texts = [...this.state.texts, this.state.text]
    this.setState({
      texts
    });
    this.myTextInput.current.clear();
  };

  delText = (index) => {
    let texts = [...this.state.texts]
    texts.splice(index, 1);
    this.setState({
      texts
    });
  };

  render() {
    const { count } = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.countContainer}>
          <Text style={styles.head}>สมุดบันทึก</Text>
        </View>
        <TextInput ref={this.myTextInput} style={styles.textInput} onChangeText={this.setText} />
        <Button style={styles.Button} title="บันทึก" onPress={this.saveText} />
        <View style={styles.countContainer}>
          {this.state.texts.map((text, index) => {
            return (
              <Text key={index} onPress={() => this.delText(index)}>
                {text}
              </Text>
            )
          })
          }
        </View>
      </View>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    justifyContent: "center",
    paddingHorizontal: 10
  },
  head: {
    fontSize: "18px",
    fontWeight:"bold",
    alignItems: "center",
    padding: 10
  },
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10
  },
  countContainer: {
    alignItems: "center",
    padding: 10
  },
  textInput: {
    height: 40,
    borderColor: "red",
    borderWidth: 1,
    textAlign: "center",
  },
  Button: {
    height: 50,
    borderColor: "gray",
    borderWidth: 1,

  },
});

export default App;