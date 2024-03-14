import { Link } from "react-router-dom";

export const ItemDeFilme = ({id, title}) => (
    <li>
        <Link to={`movie/${id}`} >
            {`${id} - ${title}`}
        </Link>
    </li>
);