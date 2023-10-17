import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 1.6rem;
  background: rgba(255, 255, 255, 0.20);
  border-radius: .5rem;
  padding-left: 1.6rem;

  > input {
    width: 100%;
    height: 6.5rem;
    border-radius: .5rem;
    background: none;
    border: none;
    color: ${({theme}) => theme.COLORS.DARK_40};
    font-size: 1.8rem;
    font-weight: 500;
    line-height: normal;

    &::placeholder {
      opacity: .5;
    }
  }

  > svg {
    color: ${({theme}) => theme.COLORS.DARK_40};
  }
`