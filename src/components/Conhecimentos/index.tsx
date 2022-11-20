import { AiFillHtml5 } from 'react-icons/ai';
import { FaCss3Alt, FaReact } from 'react-icons/fa'
import { IoLogoJavascript } from 'react-icons/io5'
import { SiTypescript } from 'react-icons/si'
import SectionTitle from '../SectionTitle';
import ConhecimentoItem from './ConhecimentosItem';
import { Container } from './styles';

export function Conhecimentos() {
  return (
    <Container>
      <SectionTitle title='Conhecimentos' />
      <section>
        <ConhecimentoItem title='HTML' icon={<AiFillHtml5 />} />

        <ConhecimentoItem title='CSS' icon={<FaCss3Alt />} />

        <ConhecimentoItem title='Javascript' icon={<IoLogoJavascript />} />

        <ConhecimentoItem title='Typescript' icon={<SiTypescript />} />

        <ConhecimentoItem title='React' icon={<FaReact />} />
      </section>
    </Container>
  );
}
