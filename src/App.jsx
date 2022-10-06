import React,{useState} from "react";
import ColorfulMessage from "./Components/ColorfulMessage.jsx";
//{}はjsを記述できる
//cssに充てる記述は文字列として書く
//Componentsにcolor等適当な名前を付けてpropsを渡せる
//props=Componentに渡す引数みたいなもの
//const [num,setNum]=useState(0); 変数　更新関数　初期値を設定する
const App = () => {
const onClickCountUp=()=>{
    setNum(num+1);
};
const [num,setNum]=useState(0);
  return (
    <>
    <h1 style={{color:"red"}}>Hello</h1>
    <ColorfulMessage color="blue">お元気ですか</ColorfulMessage>
    <ColorfulMessage color="pink">Agate</ColorfulMessage>
    <button onClick={onClickCountUp}>カウントアップ</button>
    <p>{num}</p>
    </>
  );
};

export default App;
