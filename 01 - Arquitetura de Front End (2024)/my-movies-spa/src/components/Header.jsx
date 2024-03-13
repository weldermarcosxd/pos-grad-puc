import { HeaderStyled } from "../styles/HeaderStyled";
import { MainMenu } from "./MainMenu";

export const Header = () => (
    <HeaderStyled>
        <h1>Meus filmes</h1>
        <MainMenu></MainMenu>
    </HeaderStyled>
);