import SectionTitle from '../SectionTitle';
import ExperienciaItem from './ExperienciaItem';
import { Container } from './styles';

function Experiencias() {
    return (
        <Container>
            <SectionTitle title="Especializando" description="em front-end" />
            
            <section>
                <ExperienciaItem year="2022" title="Clone Tela Inicial Netflix" description="Projeto realizado para fins de estudos."  />
                <ExperienciaItem year="2022" title="Beatysalon" description="Projeto inspirado em um site de salão de beleza."  />
                <ExperienciaItem year="2022" title="Buscador de CEP" description="Projeto desenvolvido em react consumindo uma API."  />
            </section>
        </Container>
    )
}

export default Experiencias;