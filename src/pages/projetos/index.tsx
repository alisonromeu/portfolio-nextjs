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
            <meta name="twitter:image" content="/ogimage.png" />
            <meta name="twitter:image:src" content="/ogimage.png" />
            <meta
            property="og:description"
            content="Sou um desenvolvedor Front-end e aqui apresento alguns projetos desenvolvidos por mim!"
            />
        </Head>

            <Header />
            <main className="container">
                <ProjetoItem 
                    title="Projeto 01" 
                    type="Website" 
                    slug="Testando"
                    imgUrl="https://cdn.pixabay.com/photo/2018/06/07/16/49/virtual-3460451_960_720.jpg"
                />
            </main>
        </ProjetosContainer>
    )
}