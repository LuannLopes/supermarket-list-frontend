import styled from 'styled-components'

export const Title = styled.h1`
  color: #000;
  max-width: ${({ mw }) => mw || 310}px;
  text-align: ${({ align }) => align || 'center'};
  font-size: ${({ fontSize }) => fontSize || 24}px;
  font-weight: bold;
  line-height: ${({ lineHeight }) => lineHeight || 22}px;

  @media (max-width: 420px) {
    max-width: 300px;
    font-size: 18px;
  }
`
export const SubTitle = styled.h3`
  max-width: ${({ mw }) => mw || 310}px;
  text-align: ${({ align }) => align || 'center'};
  font-size: ${({ fontSize }) => fontSize || 16}px;
  font-weight: 500;
  margin: 0;
  padding: 0;
  margin-bottom: ${({ mb }) => mb || 48}px;

  @media (max-width: 420px) {
    max-width: 300px;
    font-size: 12px;
    margin-bottom: ${({ mb }) => mb || 24}px;
  }
`
