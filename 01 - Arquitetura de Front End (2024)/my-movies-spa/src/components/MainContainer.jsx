import { ItemDeFilme } from "./ItemDeFilme";

export const MainContainer = ({filmes}) => (
    <section>
        <ul>
            {filmes.map(f => <ItemDeFilme key={f.title} {...f}  />)}
        </ul>
    </section>
);