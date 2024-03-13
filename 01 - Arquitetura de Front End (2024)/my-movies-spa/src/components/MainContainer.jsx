import { ItemDeFilme } from "./ItemDeFilme";

export const MainContainer = ({filmes}) => (
    <section>
        <ul>
            {filmes.map(f => <ItemDeFilme titulo={f.title} />)}
        </ul>
    </section>
);