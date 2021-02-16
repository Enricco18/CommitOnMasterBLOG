import styled from 'styled-components';
import theme from '../../styles/theme';

const Content = styled.div`
    padding: 48px 16px;
    position:relative;
    box-sizing:border-box;
    width:75vw;
    min-height:100vh;
    left:25vw;
    background-color: ${theme.secondaryColor};
    color:${theme.defaultTextColor};
    div{
      margin:0 auto;
      max-width:800px;
      > * {
        margin-bottom:10px;

     }

     >p{
      text-align:justify;
     }

     >h1{
        margin-bottom:15px;
     }

    }
    @media (max-width: 1280px)
    {
        left:0;
        width:100vw;
        
    }
`

export { Content }