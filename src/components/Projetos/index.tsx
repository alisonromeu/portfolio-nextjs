import Link from "next/link";
import SectionTitle from "../SectionTitle";
import CardItem from "./CardItem";
import { Container } from "./styles";

function Projetos() {
    return (
        <Container>
            <SectionTitle title="Últimos Projetos" />

            <section>
                <CardItem title="beautySalon" type="- Website" link="https://beautysalon-alisonromeu.vercel.app/" img="https://images.unsplash.com/photo-1562322140-8baeececf3df?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aGFpcmRyZXNzZXJ8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />

                <CardItem title="Sistema de Notas com Autentificação" type="- Sistema" link="https://sistema-de-notas-alisonromeu.vercel.app/" img="https://cdn.pixabay.com/photo/2017/10/14/09/56/journal-2850091_960_720.jpg" />

                <CardItem title="Fluxo de Caixa" type="- Programa" link="https://finances-project-discover-alisonromeu.vercel.app/" img="https://media.istockphoto.com/id/466240661/pt/foto/golden-cifr%C3%B5es-a-chover.jpg?s=612x612&w=is&k=20&c=pR0gyCfiJ5VsjYy6rs2QIzr4BhoJb2azWW9k3RJtEnA=" />
                
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