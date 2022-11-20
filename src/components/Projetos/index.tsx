import Link from "next/link";
import SectionTitle from "../SectionTitle";
import CardItem from "./CardItem";
import { Container } from "./styles";

function Projetos() {
    return (
        <Container>
            <SectionTitle title="Últimos Projetos" />

            <section>
                <CardItem title="Projeto #01" type="- Website" slug="Teste" img="https://cdn.pixabay.com/photo/2020/10/18/18/42/bulb-5665770__340.jpg" />

                <CardItem title="Projeto #02" type="- Website" slug="Teste" img="https://cdn.pixabay.com/photo/2020/10/18/18/42/bulb-5665770__340.jpg" />

                <CardItem title="Projeto #03" type="- Website" slug="Teste" img="https://cdn.pixabay.com/photo/2020/10/18/18/42/bulb-5665770__340.jpg" />
                
            </section>
            <button type="button">
                <Link href="/projetos">
                    <a>Ver todos os projetos</a>
                </Link>
            </button>
        </Container>
    )
}

export default Projetos;