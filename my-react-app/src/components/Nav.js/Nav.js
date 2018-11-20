import React from "react";
import "./Nav.css";

const Nav = props => (
    <nav className="navbar">
        <ul>
            <li>
                <a href="/">Bird Clicky Game</a>
            </li>
            <t score={currentScore} topScore={topScore}>
                <li className="">You guessed correctly!</li>
            </t>
        </ul>
    </nav>
);

export default Nav;
