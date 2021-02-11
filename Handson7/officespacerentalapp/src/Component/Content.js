import React from "react";
import sr from '../sr.jpg';
import '../StyleSheets/MyStyle.css';


const image = <img src={sr} width="25%" height="25%" alt="Office" />
const ItemName = { Name: "DBS", Rent: 70000, Address: "Chennai" }

const Content = () => {
    let colors = [];
    if (ItemName.Rent <= 60000) {
        colors.push("textRed")
    } else {
        colors.push("textBlue")
    }

    return (
        <div>
            {image}
            <h3>Name: {ItemName.Name}</h3>
            <h3 className={colors}> Rent: Rs. {ItemName.Rent}</h3>
            <h3>Address: {ItemName.Address}</h3>
        </div>

    )

}
export default Content;


