import { Header } from "../../components/Header"
import ProjetoItem from "../../components/ProjetoItem"
import { ProjetosContainer } from "../../styles/ProjetosStyles"
import Head from 'next/head';

export default function Projetos() {
    return (
        <ProjetosContainer>

        <Head>
            <title>Projetos | Meu Portfólio </title>

            <link rel="icon" type="image/png" sizes="16x16" href="./projetos.png" />

            <meta
            name="description"
            content="Sou um desenvolvedor Front-end e aqui apresento alguns projetos desenvolvidos por mim!"
            />
            <meta property="og:image" content="/ogimage.png" />
            <meta property="og:image:secure_url" content="/ogimage.png" />
            <meta name="twitter:image:src" content="/ogimage.png" />
            <meta
            property="og:description"
            content="Sou um desenvolvedor Front-end e aqui apresento alguns projetos desenvolvidos por mim!"
            />
        </Head>

            <Header />
            <main className="container">
                <ProjetoItem 
                    title="beautySalon" 
                    type="- Website" 
                    link="https://beautysalon-alisonromeu.vercel.app/"
                    imgUrl="https://images.unsplash.com/photo-1562322140-8baeececf3df?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aGFpcmRyZXNzZXJ8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                />

                <ProjetoItem 
                    title="Sistema de Notas com Autentificação" 
                    type="- Sistema" 
                    link="https://sistema-de-notas-alisonromeu.vercel.app/"
                    imgUrl="https://cdn.pixabay.com/photo/2017/10/14/09/56/journal-2850091_960_720.jpg"
                />

                <ProjetoItem 
                    title="Fluxo de Caixa" 
                    type="- Programa" 
                    link="https://finances-project-discover-alisonromeu.vercel.app/"
                    imgUrl="https://media.istockphoto.com/id/466240661/pt/foto/golden-cifr%C3%B5es-a-chover.jpg?s=612x612&w=is&k=20&c=pR0gyCfiJ5VsjYy6rs2QIzr4BhoJb2azWW9k3RJtEnA="
                />
            </main>
        </ProjetosContainer>
    )
}