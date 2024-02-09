import React, {useState} from 'react';
import { Link, Outlet } from "react-router-dom";


export const App = () => {


    return (
        <div data-testid={'App.DataTestId'}>
            <h1>PAGE!!!!!</h1>
            <Link to={'./shop'}>About</Link>
            <br/>
            <Link to={'./shop'}>Shop</Link>
            <Outlet/>
        </div>
    );
};

