import SectionTitle from '../SectionTitle';
import ExperienciaItem from './ExperienciaItem';
import { Container } from './styles';

function Experiencias() {
    return (
        <Container>
            <SectionTitle title="Especializando" description="em front-end" />
            
            <section>
                <ExperienciaItem year="2022" title="Clone Tela Inicial Netflix" description="Projeto realizado para fins de estudos." link='https://clone-tela-netflix-alisonromeu.vercel.app/' />
                <ExperienciaItem year="2022" title="Beatysalon" description="Projeto inspirado em um site de salão de beleza." link='https://clone-tela-netflix-alisonromeu.vercel.app/' />
                <ExperienciaItem year="2022" title="Buscador de CEP" description="Projeto desenvolvido em react consumindo uma API." link='https://clone-tela-netflix-alisonromeu.vercel.app/' />
            </section>
        </Container>
    )
}

export default Experiencias;