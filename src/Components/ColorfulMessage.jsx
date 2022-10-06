import React from "react";

const ColorfulMessage=(props)=>{
    console.log(props);
    const contentStyle={
    color:'blue',
    fontSize:'18px'
};
    return(
        <p style={contentStyle}>hey guys</p>
    );
}

export default ColorfulMessage;