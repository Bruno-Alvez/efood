import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import logo from '../../assets/images/logo.png'
import { open } from '../../store/reducers/cart'
import { RootReducer } from '../../store'

import { HeaderBar } from './styles'
import { Logo } from '../../styles'

const HeaderStore = () => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart as { items: any[] })

  const openCart = () => {
    dispatch(open())
  }

  return (
      <HeaderBar id='header'>
        <h3>Restaurantes</h3>
        <Link to="/">
          <Logo src={logo} alt="efood" />
        </Link>
        <a onClick={openCart}>{items.length} produto(s) no carrinho</a>
      </HeaderBar>
  )
}

export default HeaderStore
