import { Link } from "react-router-dom";

export function Home(){
    return(
        <div>
            <h1>Olá</h1>
            <Link to="login">Ir para Login</Link>
        </div>
    );
}