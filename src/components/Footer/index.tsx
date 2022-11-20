import { Container } from './styles';
import { AiOutlineGithub, AiOutlineInstagram, AiOutlineLinkedin } from 'react-icons/ai';

function Footer() {

    function handleRedirect(url: string) {
        window.open(url);
    }

    function handleScrollTop() {
        window.scroll({
            top: 0,
            behavior: 'smooth'
        });
    }

    return (
        <Container>
            <div className='container'>
                <button type='button' onClick={handleScrollTop}>
                    Voltar ao topo
                </button>
                <section>
                    <AiOutlineInstagram
                        onClick={() => handleRedirect("https://www.instagram.com/alison.romeu/")}
                    />

                    <AiOutlineLinkedin
                        onClick={() => handleRedirect("https://www.linkedin.com/in/alisonromeu/")}
                    />

                    <AiOutlineGithub
                        onClick={() => handleRedirect("https://github.com/alisonromeu")}
                    />
                </section>
            </div>
        </Container>
    )
}

export default Footer;