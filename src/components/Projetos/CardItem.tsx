import { ProjetoContainer } from './styles';
import Link from 'next/link';
import { AiOutlineRightCircle } from 'react-icons/ai'

interface ProjetoProps {
    title: string;
    type: string;
    link: string;
    img: string;
}

function CardItem({title, type, link, img}: ProjetoProps) {
    return (
        <ProjetoContainer imgUrl={img} data-aos="fade-up" >
            <section>
                <div className='overlay' />
                <div className='text'>
                    <h1>{title}</h1>
                    <h2>{type}</h2>
                </div>
            </section>
            <button type='button'>
                <Link href={link}>
                    <a target='_blank' >Ver mais <AiOutlineRightCircle /></a>
                </Link>
            </button>
        </ProjetoContainer>
    )
}

export default CardItem;