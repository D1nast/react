import React from "react";
import ColorfulMessage from "./Components/ColorfulMessage.jsx";
//{}はjsを記述できる
//cssに充てる記述は文字列として書く
//Componentsにcolor等適当な名前を付けてpropsを渡せる
const App = () => {
const onClickButton=()=>{alert()};
const contentLedyStyle={
    color:'pink',
    fontSize:'18px'
};

  return (
    <>
    <h1 style={{color:"red"}}>Hello</h1>
    <ColorfulMessage color="blue" message="お元気ですか"/>
    <p style={contentLedyStyle}>Agate</p>
    <button onClick={onClickButton}>ボタン</button>
    </>
  );
};

export default App;
