import React, { Component } from 'react';

function Square(props) {
  //var bgcolor="blue";
  /*var squareStyle={
      backgroundColor: this.props.bgcolor,
      color: "red"
  };*/

  return (
    <button /*style={background-color= "white"}*/ className="square" onContextMenu={(event)=>event.preventDefault()} onMouseDown={props.onClick}>
      {props.value}
    </button>
  );
}

export default Square;