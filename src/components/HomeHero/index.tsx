import { Container, TextContainer, InfosContainer, CodeItem } from "./styles";
import picture from '../../../assets/picture.png';

function HomeHero() {
    return (
        <Container data-aos="fade-up" >
            <img src={picture} alt="Imagem de Perfil" />
            <div>
                <TextContainer>
                    <h1>Olá,</h1>
                    <h2>Me chamo Alison</h2>
                </TextContainer>
                <InfosContainer>
                    <CodeItem>
                        <span className="comment">// Minha Aprensentação</span>
                        <span className="purple">Infos</span> {'\u007b'}
                        <div>
                            Nome: <span className="blue">Alison,</span>
                        </div>
                        <div>
                            Sobrenome: <span className="blue">Lamas</span>
                        </div>
                        {'\u007b'}
                    </CodeItem>
                    <CodeItem>
                        <span className="comment">// Estudando</span>
                        <span className="purple">job</span> {'\u007b'}
                        <div>
                            Área: <span className="blue">Front-end,</span>
                        </div>
                        <div>
                            Especialização: <span className="blue">React</span>
                        </div>
                        {'\u007b'}
                    </CodeItem>
                </InfosContainer>
            </div>
        </Container>
    )
}

export default HomeHero;