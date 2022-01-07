import React from "react";

import LogoSVG from "../../assets/svgIcons/logo.svg";

import HomeSVG from "../../assets/svgIcons/tabIcons/home.svg";
import HomeOutlineSVG from "../../assets/svgIcons/tabIcons/homeOutline.svg";
import ShopSVG from "../../assets/svgIcons/tabIcons/shop.svg";
import ShopOutlineSVG from "../../assets/svgIcons/tabIcons/shopOutline.svg";

import DogSVG from "../../assets/svgIcons/fieldSelectIcons/dog.svg";
import CatSVG from "../../assets/svgIcons/fieldSelectIcons/cat.svg";
import BirdSVG from "../../assets/svgIcons/fieldSelectIcons/bird.svg";
import RodentSVG from "../../assets/svgIcons/fieldSelectIcons/rodent.svg";

import BadgeCarSVG from "../../assets/svgIcons/badge/badgeCar.svg";
import DetailsCarSVG from "../../assets/svgIcons/badge/detailsCar.svg";

import MenuCategorieSVG from "../../assets/svgIcons/menuIcons/categorieMenu.svg";

import ShopCar from "../../assets/svgIcons/icons/shopCar.svg";
import AddIcon from "../../assets/svgIcons/icons/add.svg";
import CheckedIcon from "../../assets/svgIcons/icons/checked.svg";
import WhiteCheckedIcon from "../../assets/svgIcons/icons/whiteChecked.svg";
import DogOutlineIcon from "../../assets/svgIcons/icons/dog-outline.svg";
import DogFilledIcon from "../../assets/svgIcons/icons/dog-filled.svg";

const CustomSVG = (props) => {
    switch (props.type) {
        case "tabBar":
            switch (props.source) {
                case "home":
                    return (
                        <HomeSVG width={props.width} height={props.height} />
                    );
                case "homeOutline":
                    return (
                        <HomeOutlineSVG
                            width={props.width}
                            height={props.height}
                        />
                    );
                case "shop":
                    return (
                        <ShopSVG width={props.width} height={props.height} />
                    );
                case "shopOutline":
                    return (
                        <ShopOutlineSVG
                            width={props.width}
                            height={props.height}
                        />
                    );
            }
            return;
        case "fieldSelect":
            switch (props.source) {
                case "dog":
                    return <DogSVG width={props.width} height={props.height} />;
                case "cat":
                    return <CatSVG width={props.width} height={props.height} />;
                case "bird":
                    return (
                        <BirdSVG width={props.width} height={props.height} />
                    );
                case "rodent":
                    return (
                        <RodentSVG width={props.width} height={props.height} />
                    );
            }
            return;
        case "menuIcon":
            switch (props.source) {
                case "menuCategorie":
                    return (
                        <MenuCategorieSVG
                            width={props.width}
                            height={props.height}
                        />
                    );
            }
            return;
        case "loadScreen":
            return <LogoSVG width={props.width} height={props.height} />;
        case "badgeCar":
            return <BadgeCarSVG width={props.width} height={props.height} />;
        case "icons":
            switch (props.source) {
                case "shopCar":
                    return (
                        <ShopCar width={props.width} height={props.height} />
                    );
                case "detailsCar":
                    return (
                        <DetailsCarSVG
                            width={props.width}
                            height={props.height}
                        />
                    );
                case "add":
                    return (
                        <AddIcon width={props.width} height={props.height} />
                    );
                case "checked":
                    return (
                        <CheckedIcon
                            width={props.width}
                            height={props.height}
                        />
                    );
                case "whiteChecked":
                    return (
                        <WhiteCheckedIcon
                            width={props.width}
                            height={props.height}
                        />
                    );
                case "dog-filled":
                    return (
                        <DogFilledIcon
                            width={props.width}
                            height={props.height}
                        />
                    );
                case "dog-outline":
                    return (
                        <DogOutlineIcon
                            width={props.width}
                            height={props.height}
                        />
                    );
            }
    }
};

export default CustomSVG;
