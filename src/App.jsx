import React, { useEffect,useState } from "react";
import ColorfulMessage from "./Components/ColorfulMessage.jsx";
//{}はjsを記述できる
//cssに充てる記述は文字列として書く
//Componentsにcolor等適当な名前を付けてpropsを渡せる
//props=Componentに渡す引数みたいなもの
//const [num,setNum]=useState(0); 変数,更新関数,初期値を設定する
//!変数で逆の値に変更
//Reactは再レンダリングする（Stateを変更したとき、propsの中身が変わったとき）
//useEffect(()=>{console.log("最初")},[num])でnumに変更あった時のみ処理
const App = () => {
  const [num, setNum] = useState(0);
  const [faceShowFlag, setfaceShowFlag] = useState(false);

  const onClickCountUp = () => {
    setNum(num + 1);
  };
  const onClickSwitchShowFlag = () => {
    setfaceShowFlag(!faceShowFlag);
  };
  const onClickResetCount=()=>{
      setNum(0);
      setfaceShowFlag(false);
  }
  useEffect(()=>{
    if(num>=1){
     if(num%3===0){
      faceShowFlag||setfaceShowFlag(true);
        }else{
      faceShowFlag && setfaceShowFlag(false);
    }}
  },[num]);
  return (
    <>
      <h1 style={{ color: "red" }}>Hello</h1>
      <ColorfulMessage color="blue">お元気ですか</ColorfulMessage>
      <ColorfulMessage color="pink">Agate</ColorfulMessage>
      <button onClick={onClickCountUp}>カウントアップ</button>
      <button onClick={onClickSwitchShowFlag}>表示／非表示</button>
      <button onClick={onClickResetCount}>カウントリセット</button>
      <p>{num}</p>
      {faceShowFlag && <p>( *´艸｀)</p>}
    </>
  );
};

export default App;
