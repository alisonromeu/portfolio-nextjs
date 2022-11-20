import { ItemContainer } from './styles';

interface ExperienceProps {
    year: string;
    title: string;
    description: string;
    
}

function ExperienciaItem({year, title, description, }: ExperienceProps) {
    return (
        <ItemContainer data-aos="fade-up" >
            <div>
                <h1>{year}</h1>
                <h2>{title}</h2>
                <p>{description}</p>
                
            </div>
        </ItemContainer>
    )
}

export default ExperienciaItem;