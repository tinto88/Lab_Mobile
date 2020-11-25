import { StyleSheet, View, Alert } from 'react-native';
import React from 'react';
import Status from './components/Status';
import MessageList from "./components/MessageList";
import {
  createImageMessage,
  createTextMessage,
} from "./utils/MessageUtils";
export default class App extends React.Component {
  state = {
    messages: [
      createImageMessage("https://res.klook.com/images/fl_lossy.progressive,q_65/c_fill,w_1200,h_630,f_auto/w_80,x_15,y_15,g_south_west,l_klook_water/activities/6caf28f3-%E6%B5%B7%E8%BE%B9%E9%87%8E%E9%A4%90%E7%A7%81%E4%BA%BA%E7%8B%82%E6%AC%A2---Klook%E5%AE%A2%E8%B7%AF/PrivateBeachPicnic.jpg"),
      createTextMessage("Hello"),
      createTextMessage("World"),
    ],
  };

  renderMessageList() {
    const { messages } = this.state;
    return (
      <View style={styles.content}>
        <MessageList
          messages={messages}
          onPressMessage={this.handlePressMessage}
        />
      </View>
    );
  }
  renderInputMethodEditor() {
    return (
      <View style={styles.inputMethodEditor}></View>
    );
  }
  renderToolbar() {
    return (
      <View style={styles.toolbar}></View>
    );
  }
  handlePressMessage = ({ id, type }) => {
    switch (type) {
      case "text":
        Alert.alert("Delete message?", "Are you sure", [{
            text: "Cancel",
          },
          {
            text: "Delete",
            onPress: () => {
              const { messages } = this.state;
              this.setState({
                messages: messages.filter((message) => message.id !== id),
              });
            },
          },
        ]);
        break;
      case "image":
        Alert.alert("Delete message?", "Are you sure", [{
            text: "Cancel",
          },
          {
            text: "Delete",
            onPress: () => {
              const { messages } = this.state;
              this.setState({
                messages: messages.filter((message) => message.id !== id),
              });
            },
          },
        ]);
        break;
      default:break;
    }
  };
  render() {
    return (<View style={styles.container}>
      <Status />
      {this.renderMessageList()}
      {this.renderToolbar()}
      {this.renderInputMethodEditor()}
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  content: {
    flex: 1,
    backgroundColor: 'white',
  },
  inputMethodEditor: {
    flex: 1,
    backgroundColor: 'white',
  },
  toolbar: {
    borderTopWidth: 1,
    borderTopColor: 'rgba(0,0,0,0.04)',
    backgroundColor: 'white',
  },
})