import { BoxOpcoes } from "../../components/BoxOpcoes/BoxOpcoes";
import { Header } from "../../components/Header/Header";

export default function Home() {
    return(
        <div className="home-content">
            <Header />
            <BoxOpcoes />
        </div>
    );
};