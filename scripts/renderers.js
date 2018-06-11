import React, { PureComponent } from "react";
import { StyleSheet, View, Dimensions } from "react-native";


this.howManyInRow=4;
this.HowManyInColumn=4;
this.marginGame=5;
this.yHeight = Dimensions.get('window').height;
this.xWidth = Dimensions.get('window').width;
this.boxWidth=this.xWidth/this.howManyInRow-2*marginGame;


const RADIUS = 20;
const X = this.boxWidth;

class Finger extends PureComponent {
  render() {
    const x = this.props.position[0] - RADIUS / 2;
    const y = this.props.position[1] - RADIUS / 2;
    return (
      <View style={[styles.finger, { left: x, top: y }]} />
    );
  }
}
class Rect extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      btnText: 'Welcome Home23'
    };
    this.whatAlready=whatAlready;
    whatAlready++;

  }
  render() {
    const x = this.props.position[0] ;
    const y = this.props.position[1] ;
    return (
      <View>
        <View style={[styles.rect, { backgroundColor: coverColor, left: x, top: y }]} />
        <View style={[styles.rect, { opacity:getOpa(this.whatAlready), backgroundColor: colors[getCol(this.whatAlready)], left: x, top: y }]} />
      </View>
    );
  }
}
let whatAlready=0;
getOpa = (index) => {
  return  this.opacityAll;
}
this.opacityAll=0;
let colors = ["yellow","blue", "red", "pink", "green", "black", "white", "purple"]
let coverColor="brown";
const styles = StyleSheet.create({
  finger: {
    borderColor: "#CCC",
    borderWidth: 4,
    borderRadius: RADIUS * 2,
    width: RADIUS * 2,
    height: RADIUS * 2,
    backgroundColor: "pink",
    position: "absolute"
  },
  rect: {
    borderColor: "#CCC",
    borderWidth: 4,
    width: X,
    height: X,
    backgroundColor: "pink",
    position: "absolute"
  }
});

export { Finger, Rect };
