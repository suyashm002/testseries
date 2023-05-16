import React from "react";
import './style.css';
import MoonLoader from 'react-spinners/MoonLoader';

export default function Loader() {
    return (
        <MoonLoader className='loader' />
    )
}