import { Link } from "react-router-dom";
import { MainMenuStyled } from "../styles/MainMenuStyled";

export const MainMenu = () => (
    <MainMenuStyled>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
        </ul>
    </MainMenuStyled>
);