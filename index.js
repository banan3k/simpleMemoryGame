import { AppRegistry,
Dimensions } from 'react-native';
import App from './App';

import React, { Component } from 'react';
import { Finger, Rect } from "./scripts/renderers";
import { MoveFinger } from "./scripts/systems";

var shuffle = require('shuffle-array');

AppRegistry.registerComponent('MyFirstGame', () => App);

this.collection = [];
for(let i=0; i<(this.howManyInRow*HowManyInColumn)/2; i++)
{
  this.collection[i*2]=i;
  this.collection[i*2+1]=i;
}

//var  collection = [1,2,3,4,5];
shuffle(this.collection);
//alert(this.collection);
getCol = (index) => {
//  return this.collection[index];
return   this.entitiesGlobal[index]["pair"];
}
/*this.entitiesGlobal={
  1: { position: [40,  200], renderer: <Finger />}, //-- Notice that each entity has a unique id (required)
  2: { position: [100, 200], renderer: <Rect />}, //-- and a renderer property (optional). If no renderer
  3: { position: [160, 200], renderer: <Finger />}, //-- is supplied with the entity - it won't get displayed.
  4: { position: [220, 200], renderer: <Finger />},
  5: { position: [280, 200], renderer: <Finger />}
};*/


//alert(Rect.size);
this.entitiesGlobal = new Object();
let addTop=0;
let x=0, y=0;
for(let i=0; i<this.HowManyInColumn*this.howManyInRow; i++) {

  x=this.marginGame+(this.boxWidth+2*this.marginGame)*(i%this.howManyInRow);
  if(i%this.howManyInRow==0 && i>0) {
    y+=this.boxWidth+this.marginGame;
  }

  this.entitiesGlobal[i] = new Object();
  this.entitiesGlobal[i]["id"]=i;
  this.entitiesGlobal[i]["pair"]=this.collection[i];
  this.entitiesGlobal[i]["renderer"]=Rect;

  this.entitiesGlobal[i]["position"]=new Object();
  this.entitiesGlobal[i]["position"][0]=x;
  this.entitiesGlobal[i]["position"][1]=this.marginGame+y;


}
//alert(this.entitiesGlobal[0]["renderer"]);

//{40,200};
//this.entitiesGlobal.push("1: { position: [40,  200], renderer: <Finger />}");
