import styled from 'styled-components';

import { GlobalStyle } from '../styles/global';
import { Pannel } from '../components/Pannel';
import { Content } from '../components/Content';

const Container = styled.div`
    width:100vw;
    height:100vh;    
`

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Pannel />
        <Content>
          <div>
            <Component {...pageProps} />
          </div>
        </Content>
      </Container>
    </>
  )
}

export default MyApp
