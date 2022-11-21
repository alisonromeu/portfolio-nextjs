import SectionTitle from '../SectionTitle';
import ExperienciaItem from './ExperienciaItem';
import { Container } from './styles';

function Experiencias() {
    return (
        <Container>
            <SectionTitle title="Especializando" description="em front-end" />
            
            <section>
                <ExperienciaItem year="2022" title="Clone Tela Inicial Netflix" description="Clone da tela inicial da netflix."  />
                <ExperienciaItem year="2022" title="Alura Tube" description="Projeto desenvolvido na imersão alura."  />
                <ExperienciaItem year="2022" title="Buscador de CEP" description="Projeto desenvolvido em react consumindo uma API."  />
            </section>
        </Container>
    )
}

export default Experiencias;