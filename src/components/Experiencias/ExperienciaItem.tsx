import { ItemContainer } from './styles';

interface ExperienceProps {
    year: string;
    title: string;
    description: string;
    linkUrl: string;
}

function ExperienciaItem({year, title, description, linkUrl }: ExperienceProps) {
    return (
        <ItemContainer data-aos="fade-up" >
            <div>
                <h1>{year}</h1>
                <h2>{title}</h2>
                <p>{description}</p>
                <a href={linkUrl} target="_blank" >Veja mais</a>
            </div>
        </ItemContainer>
    )
}

export default ExperienciaItem;