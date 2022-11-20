import { ItemContainer } from './styles';

interface ExperienceProps {
    year: string;
    title: string;
    description: string;
    link: string;
}

function ExperienciaItem({year, title, description, link}: ExperienceProps) {
    return (
        <ItemContainer data-aos="fade-up" >
            <div>
                <h1>{year}</h1>
                <h2>{title}</h2>
                <p>{description}</p>
                <a href={link} target="_blank">Veja aqui</a>
            </div>
        </ItemContainer>
    )
}

export default ExperienciaItem;