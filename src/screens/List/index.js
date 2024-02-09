import React, { useEffect, useState } from 'react'
import { getList, updateItem } from 'services/request'
import { Button, ListRender, Loader, Modal, Title } from 'components'
import {
  ContentContainer,
  HeaderButtonContainer,
  HeaderContainer,
  ListContainer,
  LogoImage,
  ScreenContainer,
  TitleContainer
} from './styles'

export const ListScreen = () => {
  const [modalVisible, setModalVisible] = useState(false)
  const [loading, setLoading] = useState(true)
  const [listData, setListData] = useState([])
  const [selectedItem, setSelectedItem] = useState(null)

  const loadListItems = async () => {
    try {
      setLoading(true)
      const result = await getList()
      setListData(result)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    loadListItems()
  }, [])

  const onClickAddButton = () => {
    setSelectedItem(null)
    setModalVisible(true)
  }

  const onCloseModal = () => {
    setModalVisible(false)
    loadListItems()
    setSelectedItem(null)
  }

  const onEditItem = (item) => {
    setSelectedItem(item)
    setModalVisible(true)
  }

  const onCheckItem = async (item) => {
    const updatedItem = {
      name: item.name,
      quantity: Number(item.quantity),
      checked: !item.checked
    }

    try {
      await updateItem(item?._id, updatedItem)
      await loadListItems()
    } catch (error) {
      console.error('Erro ao atualizar item:', error)
    }
  }

  return (
    <ScreenContainer>
      <ContentContainer>
        <HeaderContainer>
          <TitleContainer>
            <LogoImage />
            <Title fontSize={32} lineHeight={32} ml={12}>
              Lista Supermercado
            </Title>
          </TitleContainer>
          <HeaderButtonContainer>
            <Button onClick={onClickAddButton}>
              {window.innerWidth <= 420 ? '+' : 'Adicionar'}
            </Button>
          </HeaderButtonContainer>
        </HeaderContainer>
        <ListContainer>
          {loading ? (
            <Loader />
          ) : (
            <ListRender
              onCheckItem={onCheckItem}
              onEdit={onEditItem}
              list={listData}
            />
          )}
        </ListContainer>
      </ContentContainer>
      {modalVisible && <Modal item={selectedItem} onClose={onCloseModal} />}
    </ScreenContainer>
  )
}
