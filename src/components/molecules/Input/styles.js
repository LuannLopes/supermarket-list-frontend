import styled from 'styled-components'

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 420px;
  height: 48px;
  border-radius: 8px;
  border: 2px solid ${({ theme }) => theme.colors.primary};
  margin-bottom: 16px;

  @media (max-width: 420px) {
    max-width: 300px;
  }
`
export const InputLabel = styled.label`
  font-size: 12px;
  line-height: 16px;
  margin: 0;
  padding: 6px 0 4px 4px;
`

export const InputText = styled.input`
  border: 0 transparent;
  margin-left: 6px;
  font-size: 16px;
  font-family: 'Avenir Next';

  &:focus {
    outline: none;
  }
`
