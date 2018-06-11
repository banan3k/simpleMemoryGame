import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  StatusBar,
  AppRegistry,
  Dimensions,
} from 'react-native';
import { GameEngine } from "react-native-game-engine"
import { Finger, Rect } from "./scripts/renderers";
import { MoveFinger } from "./scripts/systems";


const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shkake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});



export default class App extends Component<{}> {

  render() {
  return (
    <GameEngine
        style={styles.container}
        systems={[MoveFinger]}
        entities={entitiesGlobal}>

        <StatusBar hidden={true} />

      </GameEngine>
  );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF"
  }
});
