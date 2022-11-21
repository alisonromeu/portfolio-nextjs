import { Container } from './styles';
import Link from 'next/link';

interface ProjetoItemProps {
    title: string;
    type: string;
    imgUrl: string;
    link: string;
}

function ProjetoItem({title, type, imgUrl, link}: ProjetoItemProps) {
    return (
        <Container imgUrl={imgUrl}>
            <Link href={link}>
                <a target='_blank'>
                    <div className='overlay' />
                    <section>
                        <h1>{title}</h1>
                        <h2>{type}</h2>
                    </section>
                </a>
            </Link>
        </Container>
    )
}

export default ProjetoItem;