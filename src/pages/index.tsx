import { useEffect } from 'react';
import { HomeContainer } from '../styles/HomeStyles';
import { Header } from "../components/Header";
import Aos from 'aos';
import 'aos/dist/aos.css';
import HomeHero from '../components/HomeHero';
import Experiencias from '../components/Experiencias';
import Projetos from '../components/Projetos';
import { Conhecimentos } from '../components/Conhecimentos';
import { FormContato } from '../components/FormContato';
import Footer from '../components/Footer';

import Head from 'next/head';



export default function Home() {

  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, [])

  return (
    <HomeContainer>
      <Head>
        <title>Home | Meu Portfólio </title>

        <link rel="icon" type="image/png" sizes="16x16" href="./home.png" />

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
        <HomeHero />
        <Experiencias />
        <Projetos />
        <Conhecimentos />
        <FormContato />
      </main>

      <Footer />
    </HomeContainer>
  );
}