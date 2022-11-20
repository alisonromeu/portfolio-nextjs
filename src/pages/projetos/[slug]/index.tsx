import BannerProjeto from "../../../components/BannerProjeto";
import { Header } from "../../../components/Header";
import { ProjetosContainer } from "../../../styles/ProjetosContainer";
import Head from 'next/head';

export default function Projeto() {
    return (
        <ProjetosContainer>

        <Head>
            <title> Projeto | Meu Portfólio </title>

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
            <BannerProjeto 
                title="Projeto 01"
                type="Website"
                imgUrl="https://cdn.pixabay.com/photo/2017/12/26/21/43/blockchain-3041480_960_720.jpg"
            />

            <main>
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam, autem, perferendis cumque minus fuga itaque, dicta facilis odio alias nobis non vero! Iste dignissimos modi vero earum eos in repellendus inventore exercitationem quod quidem placeat cupiditate illo illum id a voluptate veritatis facilis quaerat eligendi error harum, reprehenderit unde quas porro. Ab odit quo dolore debitis consectetur voluptates beatae unde quaerat porro hic, suscipit animi, impedit voluptatibus reprehenderit distinctio harum mollitia odio? Rem magnam nobis quasi harum accusantium itaque atque.
                </p>
                <button type="button">
                    <a href="#">Ver Projeto Online</a>
                </button>
            </main>
        </ProjetosContainer>
    )
}