import React from "react";
import { View, Image } from "react-native";

import homeIcon from "../../assets/icons/home.png";
import homeOutIcon from "../../assets/icons/home-outline.png";
import shopIcon from "../../assets/icons/shop.png";
import shopOutIcon from "../../assets/icons/shop-outline.png";

let img = "";

const ImageIcon = (props) => {
    switch (props.source) {
        case "home":
            img = homeIcon;
            break;
        case "homeOut":
            img = homeOutIcon;
            break;
        case "shop":
            img = shopIcon;
            break;
        case "shopOut":
            img = shopOutIcon;
            break;
    }
    return (
        <Image
            style={[props.style, { resizeMode: "contain" }]}
            source={img ? img : null}
        />
    );
};

export default ImageIcon;
