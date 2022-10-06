import React from 'react';
import ReactDom from "react-dom";
import App from "./App.jsx"
//JSの中でreturnしてHTMLのタグを書くことをJSX記法
//returnの中の要素は1つでないといけないのでdivで囲む等する
//React.Fragmentや<>のみで囲えばなしでもいける

ReactDom.render(<App />, document.getElementById("root"));
