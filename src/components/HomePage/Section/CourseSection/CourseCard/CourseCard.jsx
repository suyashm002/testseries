import React, { useContext } from "react";
import Stars from './Stars';
import PopupCard from '../PopupCard/PopupCard';
import { Badge } from "../Badge";
import { OverlayTrigger } from "react-bootstrap";
import { Popover } from "react-bootstrap/Popover";
import { Link } from "react-router-dom";
import './CourseCard.css';
import '../PopupCard/TippyCard.css';
import { Context } from "../../../../Context";


function adjust_img(img) {
    img = img.split('/');
    img[4] = '750x422';
    img = img.join('/');
    return img;
}



