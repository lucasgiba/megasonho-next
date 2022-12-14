import styled from 'styled-components'

export const Container = styled.div`
  height: 100vh;

  @media (min-width: 1024px) {
    overflow: hidden;
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
`

export const LuckyNumberContainer = styled.div`
  padding: 16px;
  position: relative;
  background-position: 90%;
  background-size: cover;
  height: 100%;

  display: flex;
  flex-direction: column;
  overflow: auto;

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    background-image: unset !important;
    height: 100vh;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.xg}) {
    padding: 0;
    padding-left: 9.6rem;
  }
`

export const LuckyNumberForm = styled.form`
  background-color: ${({ theme }) => theme.colors.white};
  padding: 16px;
  border-radius: 4px;
  display: flex;
  flex-direction: column;

  .get-more-button {
    margin-top: 72px;
  }

  h1 {
    text-align: left;
    font-weight: 700;
    font-size: 28px;
    line-height: 38px;
    color: ${({ theme }) => theme.colors.darkBlue};
    margin-bottom: 16px;
    br {
      display: none;
    }
  }

  p {
    text-align: left;
    font-weight: 400;
    font-size: 16px;
    line-height: 25px;
    color: ${({ theme }) => theme.colors.darkBlue};
    margin-bottom: 16px;
  }

  hr {
    margin-top: 32px;
    margin-bottom: 32px;
    background-color: ${({ theme }) => theme.colors.darkBlue};
    opacity: 0.2;
    height: 3px;
  }
  .validate-number-message {
    text-align: left;
    font-weight: 500;
    font-size: 18px;
    line-height: 25px;
    color: ${({ theme }) => theme.colors.darkBlue};
    margin-bottom: 16px;

    span {
      color: ${({ theme }) => theme.colors.blue};
    }
  }
  .lucky-number-box-shimmer {
    height: 64px;
    border-radius: 4px;
  }

  @media (min-width: 1024px) {
    height: 100%;
    .get-more-button {
      margin-top: auto;
      margin-bottom: 46px;
    }
    padding: 0;
    padding-top: 4.8rem;
    max-width: 448px;

    h1 {
      br {
        display: block;
      }
    }
  }
`

export const LuckyNumberBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 64px;
  background-color: ${({ theme }) => theme.colors.gray};
  padding: 16px 20px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 4px;

  strong {
    font-weight: 700;
    font-size: 28px;
    line-height: 38px;
    color: ${({ theme }) => theme.colors.darkBlue};
  }
`
