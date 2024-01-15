import styled from 'styled-components'

export const ModalBackgroundContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.darkTransparent};
`

export const ModalContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  width: 26vw;
  background-color: ${({ theme }) => theme.colors.white};
  padding: 24px 24px 0 24px;

  @media (max-width: 830px) {
    width: 60vw;
  }

  @media (max-height: 420px) {
    width: 100vw;
  }
`

export const ModalHeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 24px;
`

export const ModalCloseButton = styled.button`
  width: 24px;
  height: 24px;
  background-image: url('/images/close.svg');
  background-color: transparent;
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  border: none;
  cursor: pointer;
`

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 13vh;
  width: 100%;
  justify-content: space-between;
  margin-top: 55vh;

  @media (max-width: 420px) {
    height: 14vh;
    margin-top: 42vh;
    align-items: center;
  }

  @media (max-width: 360px) {
    height: 15vh;
  }
`
