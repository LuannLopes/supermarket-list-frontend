import { SmallText } from 'components/atoms'
import {
  ArrowIcon,
  ArrowIconContainer,
  CardContainer,
  TextContainer,
  CheckImage
} from './styles'

export const ListCard = ({ item, onClick, onCheckItem }) => {
  return (
    <CardContainer>
      <CheckImage
        alt="checkbox-icon"
        src={`/images/${item?.checked ? 'checked.svg' : 'unchecked.svg'}`}
        onClick={() => onCheckItem(item)}
      />
      <TextContainer>
        <SmallText align={'left'} mb={4}>
          {item?.name}
        </SmallText>
        <SmallText align={'left'} fontSize={14}>
          {item?.quantity} unidades
        </SmallText>
      </TextContainer>
      <ArrowIconContainer onClick={() => onClick(item)}>
        <ArrowIcon />
      </ArrowIconContainer>
    </CardContainer>
  )
}
