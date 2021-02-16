import styled from 'styled-components';
import theme from '../styles/theme';
import { BiSubdirectoryRight } from 'react-icons/bi';

const ContentContainer = styled.div`

p{
    font-size:1.4rem;
  }
  h2{
    font-size: 2rem;
    text-align:center;
  }

  h3{
    font-size: 1.8rem;
    text-align:center;
  }
  form{
    display:flex;
    width:100%;
    align-items:center;
    justify-content:center;
    margin-top:30px;
    input{
      box-sizing:border-box;
      width:320px;
      height:30px;
      padding-left:16px;
      -webkit-border-top-left-radius: 50px;
      -webkit-border-bottom-left-radius: 50px;
      -moz-border-radius-topleft: 50px;
      -moz-border-radius-bottomleft: 50px;
      border-top-left-radius: 50px;
      border-bottom-left-radius: 50px;
    }
    button {
      box-sizing:border-box;
      height:30px;
      width:72px;
      border-left:0;
      -webkit-border-top-right-radius: 50px;
      -webkit-border-bottom-right-radius: 50px;
      -moz-border-radius-topright: 50px;
      -moz-border-radius-bottomright: 50px;
      border-top-right-radius: 50px;
      border-bottom-right-radius: 50px;
      color:${theme.pannelTextColor};
      background-color:${theme.headerColor};
      font-size:1.4rem;
    }
  }
`


const Header = styled.h1`
  color: ${theme.headerColor};
  font-family: 'Press Start 2P', cursive;
  font-size: 2rem;
  text-align:center;
  word-spacing: 0rem;
  margin-bottom:36px !important;
  line-height:1.2;
`


const Home = () => {
  return (
    <ContentContainer>
      <Header>Bem-vindo ao meu <br />BLOG!</Header>
      <p>Nesse blog eu falarei sobre
      programação, robótica, culinária e outras coisas!
    </p>
      <p>
        Meu objetivo é transmitir conhecimento de forma gratuíta e fácil de entender, possibilitando
        aos meus leitores os conhecimentos necessários para se tornarem bons desenvolvedores, além de
        reforçar meus conhecimentos.
    </p>
      <h2>Novos artigos todo domingo!</h2>
      <h3>Se Inscreva na newsletter:</h3>
      <form>
        <input type="text" placeholder="Email"></input>
        <button type="submit"><BiSubdirectoryRight /></button>
      </form>
    </ContentContainer>
  )
}
export default Home;
