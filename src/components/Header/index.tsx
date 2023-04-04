import { MdShoppingCart, MdLogout } from 'react-icons/md';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom'
import SearchForm from './SearchForm';
import { StyledHeader } from './style';
import LogoKenzieBurguer from '../../assets/LogoKenzieBurguer.svg';
import { StyledContainer } from '../../styles/grid';
import { CartContext } from '../../providers/cartContext';

const Header = () => {

const {setOpenModal} = useContext(CartContext)

const navigate = useNavigate()

function logout() {
  localStorage.clear()
  navigate('/')
}

  return(
  <StyledHeader>
    <StyledContainer containerWidth={1300}>
      <div className='flexGrid'>
        <img
          src={LogoKenzieBurguer}
          alt='Kenzie Burguer Logo'
          className='logo'
        />
        <nav className='nav' role='navigation'>
          <SearchForm />
          <div className='buttons'>
            <button
              type='button'
              onClick={() => {  
              setOpenModal(true)
              }}>
              <MdShoppingCart size={28} />
            </button>
            <button type='button' onClick={() => logout()}>
              <MdLogout size={28} />
            </button>
          </div>
        </nav>
      </div>
    </StyledContainer>
  </StyledHeader>
  )
}

export default Header;
