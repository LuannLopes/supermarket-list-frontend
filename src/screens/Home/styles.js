import styled from 'styled-components'

export const ScreenContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.primary};
  align-items: center;
  justify-content: center;

  @media (max-width: 830px) {
    overflow-x: hidden;
    overflow-y: hidden;
  }
`
export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 552px;
  height: 720px;
  border-radius: 24px;
  background: #fff;

  @media (max-width: 420px) {
    max-width: 320px;
    max-height: 550px;
    padding: 12px;
  }
`
export const BagImage = styled.img.attrs({
  src: '/images/shopping-bag.svg',
  alt: 'shopping-back'
})`
  width: 220px;
  height: 220px;

  @media (max-width: 420px) {
    width: 140px;
  }
`

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 452px;
  margin-top: 22px;

  @media (max-width: 420px) {
    max-width: 300px;
    margin-top: 8px;
  }
`
