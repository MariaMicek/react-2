import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const Links = () => {
    return (
        <ul>
            <li>
                <Link to={"/"}>Home</Link>
            </li>
            <li>
                <Link to={"/calculators"}>Calculators</Link>
            </li>
            <li>
                <Link to={"/mui-playground"}>Button</Link>
            </li>
        </ul>
    )
}

export default Links