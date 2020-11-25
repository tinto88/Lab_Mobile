import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import { StyleSheet, Text, TouchableOpacity, View, TextInput, Button } from "react-native";


const calNum = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [".", 0, "="]]
const calOp = [['DEL'], ['+'], ['-'], ['*'], ['/']]

class App extends Component {

  constructor(props) {
    super(props)
    this.intialState = {
      displayValue: '0'
    }
    this.state = this.intialState;
  }
  // handleInput = (input) => {
  //   const { displayValue } = this.state;
  // }

  _onInputButtonPressed(input) {
    // alert(input)
    switch (typeof input) {
      case 'number':
        return this._handleNumberInput(input)
      case 'string':
        return this._handleStringInput(input)
    }
  }
  _handleNumberInput(num) {
    let displayValue = (this.state.displayValue * 10) + num;

    this.setState({
      displayValue: displayValue
    })
    console.log(displayValue)
  }
  _handleStringInput(str) {
    switch (str) {
      case '/':
      case '*':
      case '+':
      case '-':
        this.setState({
          selectedSymbol: str,
          prevdisplayValue: this.state.displayValue,
          displayValue: 0
        });
        break;
      case '=':
        let symbol = this.state.selectedSymbol,
          displayValue = this.state.displayValue,
          prevdisplayValue = this.state.prevdisplayValue;

        if (!symbol) {
          return;
        }

        this.setState({
          prevdisplayValue: 0,
          displayValue: eval(prevdisplayValue + symbol + displayValue),
          selectedSymbol: null
        });
        break;
        case 'DEL':
          this.setState({
            prevdisplayValue: 0,
            displayValue: 0,
            selectedSymbol: null
          });

    }
  }

  renderButtonSet() {
    let layouts = calNum.map((buttonRows, index) => {
      let rowItem = buttonRows.map((buttonItem, buttonIndex) => {
        return (<TouchableOpacity
          key={buttonIndex}
          style={styles.container1}
          // onPress={() => handleOnPress(buttonItem)}
          onPress={this._onInputButtonPressed.bind(this, buttonItem)}
        >{

            <Text style={styles.textValue}>{buttonItem}</Text>

          }
        </TouchableOpacity>)
      });

      return <View style={styles.inputRow} key={'row-' + index}>{rowItem}</View>
    })
    console.log("Hello")
    return layouts
  }

  renderOpButtonSet() {
    let layouts = calOp.map((buttonRows, index) => {
      let rowItem = buttonRows.map((buttonItem, buttonIndex) => {
        return (<TouchableOpacity
          key={buttonIndex}
          style={styles.container1}
          // onPress={() => handleOnPress(buttonItem)}
          onPress={this._onInputButtonPressed.bind(this, buttonItem)}
        >{
            <Text style={styles.textValue}>{buttonItem}</Text>

          }
        </TouchableOpacity>)
      });

      return <View style={styles.inputRow} key={'row-' + index}>{rowItem}</View>
    })
    console.log("Hello1")
    return layouts
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.resultContainer}>
          <Text style={styles.resultText}>{this.state.displayValue}</Text>
        </View>

        <View style={styles.inputContainer}>

          <View style={styles.numButton}>
            {this.renderButtonSet()}
          </View>

          <View style={styles.opButton}>
            {this.renderOpButtonSet()}
          </View>

        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  container1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgb(37, 39, 41)',
    margin: 1
  },
  resultContainer: {
    flex: 2,
    backgroundColor: 'red',
    justifyContent: 'center',
  },
  inputContainer: {
    flex: 6,
    backgroundColor: 'black',
    flexDirection: 'row',
  },
  numButton: {
    flex: 8,
    // backgroundColor: 'black',
  },
  resultText: {
    fontSize: '4em',
    textAlign: 'right',
    fontWeight: 'bold',
    padding: 20,

  },
  inputRow: {
    flex: 1,
    flexDirection: 'row',
  },
  textValue: {
    color: 'white',
    fontSize: 40
  },
  opButton: {
    flex: 3,

  },
});

export default App;