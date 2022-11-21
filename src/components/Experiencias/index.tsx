import SectionTitle from '../SectionTitle';
import ExperienciaItem from './ExperienciaItem';
import { Container } from './styles';

function Experiencias() {
    return (
        <Container>
            <SectionTitle title="Especializando" description="em front-end" />
            
            <section>
                <ExperienciaItem year="2022" title="Clone Tela Inicial Netflix" description="Clone da tela inicial da netflix." linkUrl='https://clone-tela-netflix-alisonromeu.vercel.app/'  />
                <ExperienciaItem year="2022" title="Alura Tube" description="Projeto desenvolvido na imersão alura." linkUrl='https://aluratube-alisonromeu.vercel.app/'  />
                <ExperienciaItem year="2022" title="Buscador de CEP" description="Projeto em react consumindo uma API." linkUrl='https://buscador-de-cep-alisonromeu.vercel.app/'  />
            </section>
        </Container>
    )
}

export default Experiencias;