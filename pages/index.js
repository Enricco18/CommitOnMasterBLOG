import styled from 'styled-components';
import theme from '../styles/theme';

const Header = styled.h1`
  color: ${theme.headerColor};
  font-family: 'Press Start 2P', cursive;
  font-size: 2rem;
  text-align:center;
  word-spacing: 0rem;
  margin-bottom:36px !important;
`


const Home = () => {
  return (
    <>
      <Header>Bem-vindo ao meu <br />BLOG!</Header>
      <p>Nesse blog eu falarei sobre
      programação, robótica, culinária e outras coisas!
    </p>
      <p>
        Meu objetivo é transmitir conhecimento de forma gratuíta e fácil de entender, possibilitando
        aos meus leitores os conhecimentos necessários para se tornarem bons desenvolvedores, além de
        reforçar meus conhecimentos.
    </p>
      <h3>Novos artigos todo domingo!</h3>
      <h2>Se Inscreva na newsletter:</h2>
    </>
  )
}
export default Home;
