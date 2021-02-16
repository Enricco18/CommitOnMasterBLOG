import styled from 'styled-components';
import Link from 'next/link';
import { darken } from 'polished';

import { FiLinkedin, FiGithub, FiFacebook } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';

import theme from '../../styles/theme';
import { useState } from 'react';


const PannelContainer = styled.div`
    position:fixed;
    height:100vh;
    width:25vw;
    box-sizing:border-box;
    background-color: ${theme.primaryColor};
    display:flex;
    z-index:3;
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
        line-height:1.2;
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
    transition:left 1s ease-in-out;

    @media (max-width: 1280px)
    {
        h1{
            margin-top:16px;
            display:none;
        }
        left:${(props) => props.isopen === true ? '0' : '-100vw'} ;
        width:100vw;
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
const HeaderContainer = styled.div`
    display:none;

    @media (max-width: 1280px)
    {
        display:flex;
        width:100vw;
        z-index:2;
        background-color: ${theme.primaryColor};
        height: 50px;
        padding:5px;
        box-sizing:border-box;

    }

    h1{
        color: ${theme.logoColor};
        font-family: 'Press Start 2P', cursive;
        margin:auto;
        text-align:center;
        font-size:1.1rem;
        display:inline-block;
        line-height:1.2;
    }
`
const ButtonToggle = styled.div`
    height:100%;
    width:50px;
    display:inline-block;
    div{
    width: 50px;
    height: 6px;
    background: #fff;
    border-radius: 5px;
    box-shadow: 0 2px 5px rgba(255,101,47,.2);
    transition: all .5s ease-in-out;
    position:relative;
    top: calc( 50% - 3px);
    z-index:5;
    }
    

    div::before, div::after {
    content: '';
    position: absolute;
    width: 50px;
    height: 6px;
    background: #fff;
    border-radius: 5px;
    box-shadow: 0 2px 5px rgba(255,101,47,.2);
    transition: all .5s ease-in-out;

    }
    div::before {
    transform: translateY(-12px);
    }

    div::after {
    transform: translateY(12px);
    }

    /* ANIMATION */
    .open{
    transform: translateX(-50px);
    background: transparent;
    box-shadow: none;
    }
    .open ::before {
    transform: rotate(45deg) translate(35px, -35px);
    }
    .open ::after {
    transform: rotate(-45deg) translate(35px, 35px);
    }
`

const Pannel = () => {
    const [isOpen, setMenu] = useState(false);

    return (
        <>

            <PannelContainer isopen={isOpen}>
                <h1>Commit on <br />Master</h1>
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
            <HeaderContainer>
                <ButtonToggle onClick={(e) => { setMenu(!isOpen); console.log(isOpen); }} >
                    <div className={isOpen === true ? "open" : "closed"}></div>
                </ButtonToggle>
                <h1>Commit on<br />Master</h1>
            </HeaderContainer>
        </>
    )
};

export { Pannel };