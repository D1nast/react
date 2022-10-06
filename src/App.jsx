import React from "react";
import ColorfulMessage from "./Components/ColorfulMessage.jsx";
//{}はjsを記述できる
//cssに充てる記述は文字列として書く
//Componentsにcolor等適当な名前を付けてpropsを渡せる
//props=Componentに渡す引数みたいなもの
const App = () => {
const onClickButton=()=>{alert()};
  return (
    <>
    <h1 style={{color:"red"}}>Hello</h1>
    <ColorfulMessage color="blue">お元気ですか</ColorfulMessage>
    <ColorfulMessage color="pink">Agate</ColorfulMessage>
    <button onClick={onClickButton}>ボタン</button>
    </>
  );
};

export default App;
