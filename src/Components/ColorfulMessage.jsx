import React from "react";
//props.childrenはタグで囲った中身を表示
//分割代入
const ColorfulMessage=(props)=>{
    const {color,children}=props;
    const contentStyle={
    color:color,
    fontSize:'18px'
};
    return(
        <p style={contentStyle}>{children}</p>
    );
}

export default ColorfulMessage;