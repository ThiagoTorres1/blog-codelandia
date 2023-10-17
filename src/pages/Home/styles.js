import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: auto;

  > header {
    padding: 4rem 51rem;
    height: 25rem;
    margin-bottom: 10rem;
    background: linear-gradient(88deg, #574AE8 0%, #3EA1DB 100%);

    div {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 7.2rem;
      
      h1 {
        color: ${({theme}) => theme.COLORS.DARK_40};
        font-size: 2.4rem;
        font-weight: 400;
      }

      p {
        color: ${({theme}) => theme.COLORS.DARK_40};
        font-size: 2.4rem;
        font-weight: 400;
      }
    }

  }

  
`

export const Content = styled.main `
  margin: 0 auto;
  max-width: 90rem;
`