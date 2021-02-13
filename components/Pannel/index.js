import styled from 'styled-components';
import Link from 'next/link';
import { darken } from 'polished';

import { FiLinkedin, FiGithub, FiFacebook } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';

import theme from '../../styles/theme';


const PannelContainer = styled.div`
    background-color: ${theme.primaryColor};
    display:flex;
    flex-direction:column;
    align-items:center;
    padding: 48px 16px;
    color: ${theme.pannelTextColor};
    h1{
        color: ${theme.logoColor};
        font-family: 'Press Start 2P', cursive;
        font-size: 2rem;
        text-align:center;
        word-spacing: 0rem;
    }

    a{
        border:none;
        outline:0;
        text-decoration:none;
        color:inherit;
        transition: all 0.8s;
        &:hover{
            cursor: pointer;
            color: ${darken(0.8, theme.pannelTextColor)}
        }
    }

`
const NavigationList = styled.div`
    display:flex;
    align-items:baseline;
    flex:1;
    ul{
        margin:auto;
        text-align:left;
        font-size: 1.5rem;
        font-weight: bold;
        li{
            margin-top:10px;
        }
    }

`
const SocialList = styled.div`
    display:flex;
    align-items:center;
    font-size:2rem;
    word-spacing: 0em;
`

const Pannel = () => (
    <PannelContainer>
        <h1>Commit on <br /> Master</h1>
        <NavigationList>
            <ul>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/">Programação</Link></li>
                <li><Link href="/">Culinária</Link></li>
                <li><Link href="/">Outros</Link></li>
                <li><Link href="/">Sobre mim</Link></li>
            </ul>
        </NavigationList>

        <SocialList>
            <a href="https://www.linkedin.com/in/enricco-amaral-224050191/"><FiLinkedin /></a>
            <a href="https://github.com/Enricco18"><FiGithub /></a>
            <a href="https://www.facebook.com/profile.php?id=100010112387745"><FiFacebook /></a>
            <a href="https://wa.me/5513991597571"><FaWhatsapp /></a>
        </SocialList>
    </PannelContainer>
)

export { Pannel };