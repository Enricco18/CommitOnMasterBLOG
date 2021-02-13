import styled from 'styled-components';
import theme from '../../styles/theme';

const Content = styled.div`
    flex:1;
    padding: 48px 16px;
    background-color: ${theme.secondaryColor};
    color:${theme.defaultTextColor};
    div{
      margin:0 auto;
      max-width:800px;
      > * {
        margin-bottom:10px;

     }

     >h1{
        margin-bottom:15px;
     }

    }
    
`

export { Content }