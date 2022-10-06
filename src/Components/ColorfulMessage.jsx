import React from "react";
//props.childrenはタグで囲った中身を表示
const ColorfulMessage=(props)=>{
    const contentStyle={
    color:props.color,
    fontSize:'18px'
};
    return(
        <p style={contentStyle}>{props.children}</p>
    );
}

export default ColorfulMessage;