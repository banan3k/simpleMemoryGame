let targetX=0, targetY=0;
let goBackX=0, goBackY=0;
let currentID=0;

var temp = new Object();

const MoveFinger = (entities, { touches }) => {
  touches.filter(t => t.type === "start").forEach(t => {
    targetX=Math.floor(touches[0].event.pageX/(this.boxWidth+this.marginGame*2));
    targetY=Math.floor(touches[0].event.pageY/(this.boxWidth+this.marginGame*2));
    currentID=targetX+targetY*howManyInRow;
    if(currentID<howManyInRow*HowManyInColumn) {
      goBackX=entities[currentID].position[0];
      goBackY=entities[currentID].position[1];
      this.opacityAll=100;
    }
  });
  touches.filter(t => t.type === "end").forEach(t => {
    let targetX2=Math.floor(touches[0].event.pageX/(this.boxWidth+this.marginGame*2));
    let targetY2=Math.floor(touches[0].event.pageY/(this.boxWidth+this.marginGame*2));
    checkedID=targetX2+targetY2*howManyInRow;

    if(checkedID<howManyInRow*HowManyInColumn) {
    setTimeout(function(){
      this.opacityAll=0;
      entities[checkedID].position = [this.marginGame+targetX2*this.boxWidth+((this.marginGame*2)*(targetX2)),
        this.marginGame+targetY2*this.boxWidth+((this.marginGame)*(targetY2))];
      entities[currentID].position = [goBackX, goBackY];
    }, 1000);

    entities[checkedID].position = [this.marginGame+targetX2*this.boxWidth+((this.marginGame*2)*(targetX2)),
      this.marginGame+targetY2*this.boxWidth+((this.marginGame)*(targetY2))];
    }
    if(currentID<howManyInRow*HowManyInColumn) {
        if(currentID!=checkedID && entities[currentID]["pair"]==entities[checkedID]["pair"]) {
          alert("pair!");
          entities[currentID].renderer=null;
          entities[checkedID].renderer=null;
        }
        else
          entities[currentID].position = [goBackX,goBackY];

    }
});
  touches.filter(t => t.type === "move").forEach(t => {

    let finger = entities[currentID];
    if (finger && finger.position) {
      finger.position = [
        finger.position[0] + t.delta.pageX,
        finger.position[1] + t.delta.pageY
      ];
    }
  });

  return entities;
};

let stop=0;

export { MoveFinger };
