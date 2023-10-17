import styled from "styled-components";

export const Container = styled.button`
  width: 100%;
  padding: 2.4rem;
  margin-bottom: 5rem;
  border: none;
  border-radius: .5rem;
  background: ${({theme}) => theme.COLORS.DARK_40};
  box-shadow: 0px 0px 10px 0px rgba(19, 19, 31, 0.05);
  text-align: left;
`

export const Info = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2.2rem;

  > p {
    color: ${({theme}) => theme.COLORS.DARK_20};
    font-size: 1.6rem;
    font-weight: 400;
  }

  > svg {
    color: ${({theme}) => theme.COLORS.BRAND_COLORS};
  }
`

export const Content = styled.div`
  > h2 {
    color: ${({theme}) => theme.COLORS.DARK_10};
    font-size: 2.6rem;
    font-weight: 400;
    margin-bottom: .8rem;
  }

  > p {
    color: ${({theme}) => theme.COLORS.DARK_20};
    font-size: 1.8rem;
    font-weight: 400;
    line-height: 3.2rem;
  }
`