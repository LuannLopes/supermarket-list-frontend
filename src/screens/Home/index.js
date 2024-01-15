import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Title, SubTitle } from 'components'
import { Input } from 'components/molecules/Input'
import { SAVE_USERNAME_PATH } from 'services/constants'
import {
  ScreenContainer,
  ContentContainer,
  BagImage,
  ButtonContainer
} from './styles'

export const HomeScreen = () => {
  const navigate = useNavigate()
  const [userName, setUserName] = useState('')

  const onClickContinue = () => {
    if (userName.length < 3) {
      alert('UserName deve conter mais do que 3 caracteres!')
      return
    }
    localStorage.setItem(SAVE_USERNAME_PATH, userName)
    navigate('/list')
  }

  return (
    <ScreenContainer>
      <ContentContainer>
        <BagImage />
        <Title>Sua lista de supermercado mais fácil do que nunca</Title>
        <SubTitle>
          Ajudamos você a organizar sua lista de compras de forma descomplicada.
        </SubTitle>
        <SubTitle mw={452} align="left" mb={16}>
          Digite abaixo seu usuário para ter acesso a sua lista de compras:
        </SubTitle>
        <Input
          onChange={(text) => setUserName(text)}
          value={userName}
          label="UserName"
          placeholder="Ex: usuario1"
        />
        <ButtonContainer>
          <Button onClick={onClickContinue}>Acessar</Button>
        </ButtonContainer>
      </ContentContainer>
    </ScreenContainer>
  )
}
