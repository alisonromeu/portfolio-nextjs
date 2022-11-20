import SectionTitle from '../SectionTitle';
import ExperienciaItem from './ExperienciaItem';
import { Container } from './styles';

function Experiencias() {
    return (
        <Container>
            <SectionTitle title="05 Anos" description="de experiência" />
            
            <section>
                <ExperienciaItem year="2020" title="#01 - Projeto" description="Trabalho desenvolvido a pedido da empresa Fulano" />
                <ExperienciaItem year="2021" title="#02 - Projeto" description="Trabalho desenvolvido a pedido da empresa Ciclano" />
                <ExperienciaItem year="2022" title="#03 - Projeto" description="Trabalho desenvolvido a pedido da empresa Mesclano" />
            </section>
        </Container>
    )
}

export default Experiencias;