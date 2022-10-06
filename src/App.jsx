import React from "react";

//{}はjsを記述できる
//cssに充てる記述は文字列として書く
const App = () => {
const onClickButton=()=>{alert()};
const contentStyle={
    color:'blue',
    fontSize:'18px'
};
  return (
    <>
    <h1 style={{color:"red"}}>Hello</h1>
    <p style={contentStyle}>hey guys</p>
    <p style={contentStyle}>thanks</p>
    <button onClick={onClickButton}>ボタン</button>
    </>
  );
};

export default App;