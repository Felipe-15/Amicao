import React from "react";
import { Image } from "react-native";

import labrador from "../../../assets/images/AnmImg/labrador.png";
import pitbull from "../../../assets/images/AnmImg/pitbull.png";
import beagle from "../../../assets/images/AnmImg/beagle.png";
import rottweiler from "../../../assets/images/AnmImg/rottweiler.png";

let img = "";

const ImageAnimal = (props) => {
    switch (props.directory) {
        case "labrador":
            img = labrador;
            break;
        case "pitbull":
            img = pitbull;
            break;
        case "beagle":
            img = beagle;
            break;
        case "rottweiler":
            img = rottweiler;
            break;
    }

    return <Image {...props} source={img} />;
};

export default ImageAnimal;
